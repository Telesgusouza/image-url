import { v4 as createId } from "uuid";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Data/firebase";

import * as Style from "./style";
import useActionTypes from "../../redux/upload/useActionTypes";

type PropReducer = {
  uploadState: () => {};
};

export default function LoadingImage() {
  const [progressBar, setProgressBar] = useState(0);
  const { uploadImage }:any = useSelector(
    (reducer: PropReducer) => reducer.uploadState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const randomId = createId();
    const imageRef = ref(storage, `image/${randomId}_${uploadImage.name}`);

    const uploadTask = uploadBytesResumable(imageRef, uploadImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressBar(progress);
      },
      (error) => {
        console.error(error);
        alert("ocorreu um erro, por favor envie apenas fotos com no maximo de 3MB");
        dispatch({
          type: useActionTypes.UPLOAD,
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setTimeout(() => {
            dispatch({
              type: useActionTypes.GETIMG,
              payload: downloadURL,
            });
          }, 1300);
        });
      }
    );
  }, []);

  return (
    <Style.Container className="box">
      <p>Enviando...</p>
      <Style.NavBar width={progressBar} />
    </Style.Container>
  );
}
