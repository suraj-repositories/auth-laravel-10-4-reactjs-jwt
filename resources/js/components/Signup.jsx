import { useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const {http} = AuthUser();

    const [name, setName] = useState();
    const [dob, setDob] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = ()=>{
        http.post('/signup', {name:name,dob:dob, email:email, password:password}).then((res)=>{
            navigate("/login");
        });;
    };

    return (
        <>
            <div className="text-center w-100 mt-3">
            <h1>Signup</h1>
            </div>
            <div className="row justify-content-center pt-4">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="dob">Date of Birth:</label>
                            <input type="date" className="form-control" id="dob" onChange={e=>setDob(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="mb-1" htmlFor="email">Email address:</label>
                            <input type="email" className="form-control" id="email" onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label  className="mb-1"  htmlFor="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                     
                        <button type="button" className="btn p-2 btn-dark text-light my-3 btn-default" onClick={submitForm}>Signup</button>
                    </div>
                </div>
            </div>

            
        </>
    );
}