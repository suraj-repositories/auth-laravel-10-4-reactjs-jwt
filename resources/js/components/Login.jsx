import { useState } from "react";
import AuthUser from "./AuthUser";

export default function Login() {

    const {http, setToken} = AuthUser();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = ()=>{
        http.post('/login', {email:email, password:password}).then((res)=>{
            setToken(res.data.user, res.data.access_token);         
        });;
    };

    return (
        <>
            <div className="text-center w-100 mt-3">
            <h1>Login</h1>
            </div>
            <div className="row justify-content-center pt-4">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" id="email" onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label  className="mb-1"  htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                     
                        <button type="button" className="btn p-2 btn-dark text-light my-3 btn-default" onClick={submitForm}>Login</button>
                    </div>
                </div>
            </div>

            
        </>
    );
}