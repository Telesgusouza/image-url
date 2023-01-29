import { storage } from "../firebase";
import { v4 as createId } from "uuid";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import useActionTypes from "../../redux/upload/useActionTypes";
import { useEffect } from "react";

// export async function setImage(fileImage: any) {
//   const { porcentEnv } = useSelector((state: any) => state.uploadState);
//   const dispatch = useDispatch();

//   const randomId = createId();
//   const imageRef = ref(storage, `image/${fileImage.name}-${randomId}`);

//   const uploadTask = uploadBytesResumable(imageRef, fileImage);

//   uploadTask.on("state_changed", (snapshot: any) => {
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log("progresso " + progress)
//   });
// }
