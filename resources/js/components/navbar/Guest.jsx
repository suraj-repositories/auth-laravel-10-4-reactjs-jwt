import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Signup';
import NotFound from '../errors/NotFound';


function Guest() {

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
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">Signup</Link>
                                </li>
                               
                            </ul>
                          
                        </div>
                    </div>
                </nav>
            </div>

            <div className="container mt-3">
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>

                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </div>
        </>
    );
}

export default Guest;
