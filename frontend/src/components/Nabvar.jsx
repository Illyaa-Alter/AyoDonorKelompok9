import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import '../style/home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate(); // Menggunakan useNavigate hook dari 'react-router-dom'

    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand me-auto" href="#">AyoDonor</a>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">AyoDonor</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item"><a className="nav-link mx-lg-3 active" aria-current="page" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link mx-lg-3" href="#">Info Kesehatan</a></li>
                            <li className="nav-item"><a className="nav-link mx-lg-3" href="/Create">Pendaftaran</a></li>
                            <li className="nav-item"><a className="nav-link mx-lg-3" href="/riwayat">Riwayat</a></li>
                            <li className="nav-item"><a className="nav-link mx-lg-3" href="/About">Tentang Kami</a></li>
                        </ul>
                    </div>
                </div>
                <a href="/Login" className="login-button">Masuk / Daftar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Home;
