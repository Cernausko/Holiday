import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as service from "../../services/TimesCrudServices";
import { auth } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";

export const InputPicture = (props) => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [imageData, setimageData] = useState({
    number:'',
    title: '',
    picture: '',
    uid:''
  });
  const [photoCount, setPhotoCount] = useState(0);
  
  useEffect(()=>{
    service.getAllPhotos(phot =>{
        setPhotoCount(phot.length);
    }, user)

}, [])
  const handleChange = (event) => {
    setimageData({ ...imageData, [event.target.name]: event.target.value, uid: user.uid });
  };
  const submitHandle = (event) => {
    event.preventDefault();
    imageData.number = photoCount + 1;
    service.addPhoto(imageData);
    navigate('/');
    setPhotoCount(photoCount + 1);
  };

  return (
    <form onSubmit={submitHandle} className="form container">
      <div className="form-group">
        <input type="text" name="title" placeholder="Nuotraukos pavadinimas" className=" m-1 form-control" onChange={handleChange} value={imageData.title} />
      </div>
      <div className="form-group mt-1">
        <textarea name="picture" placeholder="Nuotraukos nuoroda" className=" m-1 form-control" onChange={handleChange} value={imageData.picture} />
      </div>
      <div className="form-group mt-3">
        <button type="submit" className="btn btn-success w-100">Saugoti</button>
      </div>

    </form>
  );
};


