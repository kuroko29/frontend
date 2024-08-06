'use client';
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Page() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <br /><br /><br />
            <div style={{ backgroundColor: "white" }}>
                <div className="container">
                    <div className="card">
                        <h5 className="card-header">Featured</h5>
                        <div className="card-body shadow-lg">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <div className="input-group">
                                        <input 
                                            type={passwordVisible ? "text" : "password"} 
                                            className="form-control" 
                                            id="inputPassword4" 
                                        />
                                        <button 
                                            type="button" 
                                            className="btn btn-outline-secondary" 
                                            onClick={togglePasswordVisibility}
                                        >
                                            <i className={`bi ${passwordVisible ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="inputAddress"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Your date of birth</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="day/month/year" />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
