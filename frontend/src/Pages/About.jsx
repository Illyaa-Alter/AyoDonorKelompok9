import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Gambar from '../assets/pngwing.com.png'

function About(){

    return (

        <div className="container-fluid hero-section" 
        style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            paddingTop: '100px' 
        }}
        >
            <div className="row w-75 shadow rounded-4 bg-white mb-5">
        
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
                    <h1 className="mb-4 fs-3">
                        Tentang <span className="highlight fs-3" style={{ color: '#007bff', fontWeight: 'bold' }}>Kami</span>
                    </h1>
                    <p className="lead mb-4 fs-6 " style={{ textAlign:'justify'}} >
                        Kami adalah platform yang didedikasikan untuk membantu masyarakat dalam mengelola informasi donor darah
                        dan kesehatan dengan mudah dan efisien. Tujuan kami adalah menciptakan ekosistem yang mendukung
                        kegiatan donor darah serta memberikan edukasi kesehatan secara menyeluruh.
                    </p>
                    <h3 className="mt-4 mb-3 fs-3">Visi Kami</h3>
                    <p className="mb-4" style={{ textAlign:'justify'}} >
                        Menjadi platform terpercaya yang membantu masyarakat dalam mengakses informasi kesehatan dan mendukung
                        kegiatan donor darah secara nasional.
                    </p>

                    <h3 className="mt-4 mb-3 fs-3">Misi Kami</h3>
                    <ul>
                        <li style={{ textAlign:'justify'}}>Mempermudah akses informasi donor darah dan kesehatan.</li>
                        <li style={{ textAlign:'justify'}}>Menyediakan layanan edukasi kesehatan berkualitas.</li>
                        <li style={{ textAlign:'justify'}}>Mendukung komunitas donor darah melalui teknologi yang modern.</li>
                    </ul>
                </div>

                
                <div className="col-md-6 d-flex justify-content-center align-items-center bg-light rounded-4">
                    <img 
                        src={Gambar}
                        alt="Tentang Kami" 
                        className="img-fluid rounded-4" 
                    />
                </div>
            </div>
        </div>
    );
} 
export default About;