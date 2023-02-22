import { HttpException, Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";
import { UserRepository } from "src/user/user.repository";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const accessToken = req?.cookies?.accessToken;
    const refreshToken = req?.cookies?.refreshToken;

    if (!accessToken) {
      // accessToken이 없는 경우
      throw new HttpException("Unauthorized", 401);
    }

    const decodedAccessToken = await this.jwtService.verifyAsync(accessToken).catch(async (error) => {
      if (error.message === "jwt expired") {
        // accessToken이 만료된 경우
        // checkRefreshTokenAndReissue 함수를 통해 refreshToken 검증 및 새 token 발급
        const [newAccessToken, newRefreshToken, userId] = await this.checkRefreshTokenAndReissue(refreshToken);

        res.cookie("accessToken", newAccessToken).cookie("refreshToken", newRefreshToken);

        return { id: userId };
      }

      // 만료된 경우 이외의 오류
      throw new HttpException("Unauthorized", 401);
    });

    req.body.userId = decodedAccessToken.id;
    next();
  }

  async checkRefreshTokenAndReissue(refreshToken: string) {
    const decodedRefreshToken = await this.jwtService.verifyAsync(refreshToken).catch(async (error) => {
      if (error.message === "jwt expired") {
        // refreshToken이 만료된 경우
        throw new HttpException("refresh token is expired", 401);
      }
      // 만료된 경우 이외의 오류
      throw new HttpException("Unauthorized", 401);
    });

    const userId = decodedRefreshToken.id;

    const user = await this.userRepository.findUserByName(userId);

    if (!user) {
      // 유저가 존재하지 않는 경우
      throw new HttpException("Unauthorized", 401);
    }

    if (refreshToken !== user.refresh_token) {
      // refreshToken이 탈취당한 경우
      this.userService.logout();
      throw new HttpException("Unauthorized", 401);
    }

    // refreshToken 검증 후 새 token 발급
    const newAccessToken = this.jwtService.sign({ id: userId }, { expiresIn: "1m" });
    const newRefreshToken = this.jwtService.sign({ id: userId }, { expiresIn: "7d" });
    user.refresh_token = newRefreshToken;
    await user.save();

    return [newAccessToken, newRefreshToken, userId];
  }
}
