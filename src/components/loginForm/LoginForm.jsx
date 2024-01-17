import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices";

export const Login = () =>{
    const [credentials, setCredentials ] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const handleChange = (e)=>{
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })

}
useEffect(()=>{
    if(loading) return;
    if(user) navigate('/main')
}, [user, loading])
    const submitHandler = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(credentials.email, credentials.password)
    
    
    }
    return(
        <>
        <h2 className="m-3 text-center">Prisijungimas</h2>
        <form onSubmit={submitHandler}>
        <div className="form container" >
            <div className="mb-3">
                <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Jūsų el.paštas" onChange={handleChange}/>
                </div>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" name="password" placeholder="*********" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-success btn-lg">Prisijungti</button>
            <div className="mt-3">
                <p>Neturite paskyros ? <Link to="/register">Prisiregistruokite!</Link></p>
            </div>
            <div className="mt-3">
                <p>Nepavyksta prisijungti ? <Link to="/password-reset">Atstatykite slaptažodį!</Link></p>
            </div>
        </div>
        </form>

        </>
    )
}