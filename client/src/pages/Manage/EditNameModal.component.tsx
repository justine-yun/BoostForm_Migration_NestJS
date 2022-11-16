import React, { useState } from "react";
import formApi from "api/formApi";
import { Container } from "./EditNameModal.style";
import EditNameModalProps from "./EditNameModal.type";

function EditNameModal({ closeModal, selectedForm, renderByNameChange }: EditNameModalProps) {
  const [title, setTitle] = useState("");

  const onClickChangeName = async () => {
    await formApi.editName(selectedForm.id, title);
    renderByNameChange(selectedForm.index, title);
    closeModal();
  };
  const onClickCancelChangeName = () => closeModal();

  const onInputChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Container>
      <div>이름 바꾸기</div>
      <div>항목의 새 이름을 입력하세요</div>
      <input onInput={onInputChangeName} />
      <div>
        <button type="button" onClick={onClickChangeName}>
          확인
        </button>
        <button type="button" onClick={onClickCancelChangeName}>
          취소
        </button>
      </div>
    </Container>
  );
}

export default EditNameModal;
