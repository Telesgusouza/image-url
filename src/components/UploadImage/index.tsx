import imgUpload from "../../assets/image.svg";
import { useDispatch } from "react-redux";
import React, {
  ChangeEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";

import * as Styled from "./style";
import useActionTypes from "../../redux/upload/useActionTypes";

export default function UploadImage() {
  const [inputFIle, setInputFIle] = useState<null | File>(null);

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

  function handleInputFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { files }: any = e.target; // HTMLInputElement ???

    setInputFIle(files[0]);
  }

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputFile(e)
            }
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
