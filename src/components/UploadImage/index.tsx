import imgUpload from "../../assets/image.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import * as Styled from "./style";
import useActionTypes from "../../redux/upload/useActionTypes";

export default function UploadImage() {
  const [inputFIle, setInputFIle] = useState<any>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (inputFIle) {
      setTimeout(() => {
        dispatch({
          type: useActionTypes.RELOAD,
          payload: inputFIle,
        });
      }, 1500);
    }
  }, [inputFIle]);

  return (
    <Styled.Container className="box">
      <h1>Suba sua imagem</h1>
      <p>O arquivo deve ser JPEG, PNG,...</p>

      <Styled.Form>
        <div>
          <img src={imgUpload} alt="logo de upload de imagem" />
          <p>
            {inputFIle ? inputFIle.name : "Arraste e solte sua imagem aqui"}
          </p>
          <input
            onChange={(e: any) => setInputFIle(e.target.files[0])}
            type="file"
            name="file"
          />
        </div>
        <p>Ou</p>

        <button>
          <input type="file" name="file" /> Escolha um arquivo
        </button>
      </Styled.Form>
    </Styled.Container>
  );
}
