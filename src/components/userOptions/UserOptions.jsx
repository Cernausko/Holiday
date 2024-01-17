import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import * as userServices from "../../services/userServices";
import { auth,logout } from "../../services/AuthServices";

const User = ()=>{
 const [userData, setUserData] = useState({});
 const [user, loading, error] = useAuthState(auth);   
 const navigate = useNavigate();

 useEffect(()=>{
    if(loading) return;
    if (!user) navigate("/");
    userServices.getUserData(user, setUserData)
 },[user,loading])

 
    return(
        <ul className="navbar-nav">
        {user && (
				<div className="btn-group">
					<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{userData?.name}</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li className="dropdown-item">
							<a className="dropdown-item" href="#">{auth?.currentUser?.email}</a>
						</li>
						<li className="dropdown-item" onClick={logout}>
							<a className="dropdown-item" href="#">Atsijungti</a>
						</li>
					</ul>
				</div>
			)}
      </ul>
    )
}

export default User