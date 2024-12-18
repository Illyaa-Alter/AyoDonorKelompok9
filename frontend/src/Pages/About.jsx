import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "../components/Nabvar"

function About(){

    return (
//       <div className="container-fluid">
//       <div className="text-center mt-5">
//           <br /><br /><br /><br /><br /><br /><br /><br />
//           <h1>Abot Pisan</h1> {/* Menggunakan `text-center` untuk center alignment */}
//       </div>
//   </div>

<div className="container-fluid hero-section" 
style={{ 
    backgroundColor: '#f8f9fa', 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: '100px' // Menjaga jarak dari navbar
}}
>
<div className="row w-75 shadow rounded-4 bg-white">
    {/* Left Box */}
    <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
        <h1 className="mb-4">
            Tentang <span className="highlight" style={{ color: '#007bff', fontWeight: 'bold' }}>Kami</span>
        </h1>
        <p className="lead mb-4">
            Kami adalah platform yang didedikasikan untuk membantu masyarakat dalam mengelola informasi donor darah
            dan kesehatan dengan mudah dan efisien. Tujuan kami adalah menciptakan ekosistem yang mendukung
            kegiatan donor darah serta memberikan edukasi kesehatan secara menyeluruh.
        </p>
        <h3 className="mt-4 mb-3">Visi Kami</h3>
        <p className="mb-4">
            Menjadi platform terpercaya yang membantu masyarakat dalam mengakses informasi kesehatan dan mendukung
            kegiatan donor darah secara nasional.
        </p>

        <h3 className="mt-4 mb-3">Misi Kami</h3>
        <ul>
            <li>Mempermudah akses informasi donor darah dan kesehatan.</li>
            <li>Menyediakan layanan edukasi kesehatan berkualitas.</li>
            <li>Mendukung komunitas donor darah melalui teknologi yang modern.</li>
        </ul>
    </div>

    {/* Right Box */}
    <div className="col-md-6 d-flex justify-content-center align-items-center bg-light rounded-4">
        <img 
            src="https://via.placeholder.com/400" 
            alt="Tentang Kami" 
            className="img-fluid rounded-4" 
        />
    </div>
</div>
</div>
    );
} 
export default About;