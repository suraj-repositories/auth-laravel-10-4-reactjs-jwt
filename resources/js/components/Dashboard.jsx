
import { useEffect } from "react";
import AuthUser from "./AuthUser";
import { useState } from "react";

export default function Dashboard() {

    const { user, http } = AuthUser();
    const [userDetails, setUserDetails] = useState();

    useEffect(() => {
        getUserDetails();
    }, []);

    const getUserDetails = () => {
        http.post("/me").then((res)=>{
            setUserDetails(res.data);
        });
    };

    const renderData = ()=>{
        if(userDetails){
            return (
                <>
                <div><b>Name : </b>{userDetails.name} </div>
                <div><b>Email : </b>{userDetails.email}</div>
                <div><b>Role : </b>{userDetails.role}</div>
                </>
            );
        }else{
            return <p>Loading...</p>
        }
    };

    return (
        <>
            <h1>Dashboard</h1>
            <br />
            <div>
                <h3>Using local storage</h3>
                <div><b>Name : </b>{user.name} </div>
                <div><b>Email : </b>{user.email}</div>
                <div><b>Role : </b>{user.role}</div>
            </div>
            <hr />
            <div>
                <h3>Using Api Call</h3>
                {renderData()}
            </div>
            
        </>
    );
}