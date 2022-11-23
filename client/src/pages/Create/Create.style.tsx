import styled from "styled-components";

const Container = styled.div`
  width: 760px;
`;

const TitleContainer = styled.div`
  margin-top: 12px;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
`;

const TitleInput = styled.input`
  width: 100%;
  display: block;
  font-size: 32px;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #afafaf;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 48px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000000;
  }
`;

const DescriptionInput = styled.input`
  width: 100%;
  margin-top: 10px;
  display: block;
  font-size: 16px;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #afafaf;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 29px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000000;
  }
`;

const TitleRead = styled.div`
  width: 100%;
  display: block;
  font-size: 32px;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #afafaf;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 48px;
`;

const DescriptionRead = styled.div`
  width: 100%;
  margin-top: 10px;
  display: block;
  font-size: 16px;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid #afafaf;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 29px;
`;

const QuestionContainer = styled.div`
  margin-top: 16px;
  background-color: white;
  border-radius: 3px;
  padding: 20px;
`;

const QuestionHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuestionTitleInput = styled.input`
  width: 60%;
  display: block;
  font-size: 16px;
  padding: 8px 10px;
  border: none;
  border-bottom: 1px solid #afafaf;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #ececec;
  border-radius: 3px;
  line-height: 29px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #000000;
  }
`;

const QuestionTitleRead = styled.div``;

const QuestionBody = styled.div`
  padding: 10px 0;
`;

const HorizontalRule = styled.hr`
  height: 1px;
  border: 0;
  background-color: #dfdfdf;
`;

const QuestionTail = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-top: 18px;
`;

const QuestionTailButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  margin-right: 5px;

  &:active {
    transform: translateY(1px);
  }
`;

const EssentialWrapper = styled.div`
  border-left: 1px solid #aeaeae;
  padding: 8px 12px;
`;

export {
  Container,
  TitleContainer,
  QuestionContainer,
  TitleInput,
  DescriptionInput,
  TitleRead,
  DescriptionRead,
  QuestionHead,
  QuestionTitleInput,
  QuestionBody,
  HorizontalRule,
  QuestionTail,
  QuestionTailButton,
  EssentialWrapper,
};