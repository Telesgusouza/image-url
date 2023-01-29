import { useDispatch, useSelector } from "react-redux";
import copy from "copy-to-clipboard";
import checkedImg from "../../assets/circle-check.svg";
import * as Styled from "./style";
import { useState } from "react";
import useActionTypes from "../../redux/upload/useActionTypes";

export default function GetImageUrl() {
  const [toggleCopy, seToggleCopy] = useState(false);
  const { getImageUrl } = useSelector((state: any) => state.uploadState);
  const dispatch = useDispatch();

  function handleCopy() {
    copy(getImageUrl);
    seToggleCopy(true);
  }

  function handleClosed() {
    setTimeout(() => {
      dispatch({
        type: useActionTypes.UPLOAD,
      });
    }, 500);
  }

  return (
    <Styled.Container className="box">
      <Styled.ButtonComeBack onClick={handleClosed}>
        Voltar
      </Styled.ButtonComeBack>
      <Styled.msgSucess>
        <img src={checkedImg} alt="logo de cheked" />
        <h1>Carregado com sucesso!</h1>
      </Styled.msgSucess>
      <Styled.Image>
        <img src={getImageUrl} alt="foto em url" />
      </Styled.Image>

      <Styled.Copy copyToggle={toggleCopy}>
        <p>{getImageUrl}</p>
        <button onClick={handleCopy}>Copiar</button>
      </Styled.Copy>
    </Styled.Container>
  );
}
