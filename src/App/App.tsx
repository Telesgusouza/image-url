import { useSelector } from "react-redux";
import GetImageUrl from "../components/GetImageUrl";
import LoadingImage from "../components/LoadingImage";

import UploadImage from "../components/UploadImage";
import rootReducer from "../redux/root-reducer";
import useActionTypes from "../redux/upload/useActionTypes";

function App() {

  const { momentstate, uploadImage } = useSelector((reducer:any) => reducer.uploadState);

  return (
    <div className="App">

      {momentstate === useActionTypes.UPLOAD && <UploadImage />}
      {momentstate === useActionTypes.RELOAD && <LoadingImage />}
      {momentstate === useActionTypes.GETIMG && <GetImageUrl />}
      
      
    </div>
  );
}

export default App;
