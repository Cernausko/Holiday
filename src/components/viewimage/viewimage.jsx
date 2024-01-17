import * as service from "../../services/TimesCrudServices";
import { useState, useEffect } from 'react';
import Photo from "../Image/Image";
import { auth } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const ViewPhotos = ()=>{
    const [photo, setPhotos] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return;
        if(!user) navigate("/");
        service.getAllPhotos(phot =>{
            setPhotos(phot)
        }, user)

    }, [user, loading])

console.log(user)
    return(
        <div className="container">
        <div className="row">
        { photo.map((photo)=>{
                    return(<Photo 
                    key={photo.id}
                    number = {photo.number}
                    id = {photo.id}
                    title= {photo.title}
                    picture ={photo.picture}
                    />)
                })}
        </div>
    </div>
    )

}

