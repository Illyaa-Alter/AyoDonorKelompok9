import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import '../style/Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const { email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // Simulasikan autentikasi
        // if (email === 'test@example.com' && password === 'password123') {
        //     setIsAuthenticated(true);
        // } else {
        //     alert('Email atau password salah!');
        // }
    };

    // if (isAuthenticated) {
    //     return <Redirect to="/" />;
    // }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">

                <div className="Left-box col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box bg-birumuda">
                    <div className="featured-image mb-3">
                        <img src="" alt="Login Page" className="img-fluid" style={{ width: '250px' }} />
                    </div>
                    <p className="text-white mt-3">Ini Halaman Login</p>
                </div>

                <div className="Right-box col-md-6">
                    <h3 className="text-center mt-3 mb-4">Login</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-4">
                            <label htmlFor="email" className="form-label">Alamat Email</label>
                            <input
                                type="email"
                                className="form-control form-control-lg bg-light fs-6"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Masukkan Email Anda"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-1">
                            <label htmlFor="password" className="form-label">Kata Sandi</label>
                            <input
                                type="password"
                                className="form-control form-control-lg bg-light fs-6"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Masukkan Kata Sandi"
                                onChange={onChange}
                                minLength="6"
                                required
                            />
                        </div>
                        <div className="form-group mb-4 d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck" />
                                <label htmlFor="formCheck" className="form-check-label text-secondary">Ingatkan saya</label>
                            </div>
                            <div className="forget">
                                <small><a href="/resetpassword">Lupa Kata Sandi?</a></small>
                            </div>
                        </div>
                        <div className="form-group mb-4">
                            <button type="submit" className="btn btn-primary btn-lg w-100 fs-6">Login</button>
                        </div>
                    </form>
                    <div className="form-group mb-4">
                        <button type="button" className="btn btn-light btn-lg w-100 fs-6">
                            <small>Masuk Menggunakan Google</small>
                        </button>
                    </div>
                    <div className="fs-6">
                        <small>Tidak Mempunyai Akun? <a href="/signup">Daftar</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
