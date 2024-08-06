'use client';
import React, { useState } from 'react';

export default function Page() {
    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
                <br /><br /><br /><br />
                <div className="container">
                    <div className="card">
                        <h5 className="card-header">Signin</h5>
                        <div className="card-body shadow-lg">
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInputGroup1"
                                        placeholder="Username"
                                    />
                                    <label htmlFor="floatingInputGroup1">Username</label>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-key-fill"></i>
                                </span>
                                <div className="form-floating">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <span
                                    className="input-group-text"
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}