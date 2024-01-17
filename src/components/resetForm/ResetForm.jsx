import {Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, sendPasswordReset } from "../../services/AuthServices";
import { useAuthState } from "react-firebase-hooks/auth";

const Reset = () =>{

    const [email, setEmail ] = useState('');
    const [user, loading, error ] = useAuthState(auth)

    const submitHandler = (e) =>{
        e.preventDefault();
        sendPasswordReset(email)
    }

    return(
        <>
        <h2 className="m-3 text-center">Slaptažodžio atstatymas</h2>
        <form onSubmit={submitHandler}>
            <div className="form container">
                <div className="mb-3">
                    <input type="email" value={email} className="form-control" placeholder="Jūsų el.paštas" onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-success btn-lg">Atstatyti</button>
                </div>
                <div className="mb-3">
                    <p>Norite grįžti ? <Link to="/Main">Prisijungimas</Link></p>
                </div>
            </div>
        </form>
    </>
    )
}

export default Reset