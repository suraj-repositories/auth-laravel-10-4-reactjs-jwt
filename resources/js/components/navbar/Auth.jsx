import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Dashboard from '../Dashboard'
import AuthUser from '../AuthUser';
import Admin from '../Admin';
import NotFound from '../errors/NotFound';

function Auth() {

    const { token, http, logout } = AuthUser();


    const [userDetails, setUserDetails] = useState({ role: undefined });
    const getUserDetails = async () => {
        await http.post("/me").then((res) => {
            setUserDetails(res.data);
        });
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    const handleLogout = () => {
        if (token != undefined) {
            logout();
        }
    };

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Auth_0</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>

                                {userDetails.role === "ADMIN" &&
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">Admin</Link>
                                    </li>
                                }


                                <li className="nav-item">
                                    <span className="nav-link" onClick={handleLogout}>Logout</span>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

            <div className="container mt-3">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    {userDetails.role === "ADMIN" &&
                        <Route path='/admin' element={<Admin />} />
                    }

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;
