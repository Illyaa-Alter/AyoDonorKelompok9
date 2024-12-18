import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Home() {
  return (
    // <div className="container-fluid">
    //   <div className="text-center mt-5">
    //     <br /><br /><br /><br /><br /><br /><br /><br />
    //     <h1>Selamat Datang di Halaman Utama</h1> {/* Menggunakan `text-center` untuk center alignment */}
    //   </div>
    // </div>

    <div className="container-fluid hero-section" 
    style={{ 
        backgroundColor: '#f8f9fa', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '100px' // Tambahkan jarak agar tidak tertutup navbar
    }}
>
    <div className="row w-75 shadow rounded-4 bg-white">
        {/* Left Box */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
            <h1 className="mb-4">
                Selamat Datang di <span className="highlight" style={{ color: '#007bff', fontWeight: 'bold' }}>Portal Kami</span>
            </h1>
            <p className="lead mb-4">
                Platform ini dirancang untuk membantu Anda mengelola informasi dengan lebih mudah dan efisien.
                Temukan berbagai fitur menarik yang kami sediakan.
            </p>
            <a href="pendaftaran.html" className="btn btn-primary btn-lg mb-4">Mulai Sekarang</a>

            {/* Informasi Donor Darah */}
            <h2 className="mt-4">Informasi Donor Darah</h2>
            <p className="mb-3">
                Jadilah pahlawan dengan mendonorkan darah Anda! Informasi terkini tentang jadwal dan lokasi donor darah tersedia di platform kami.
            </p>
            <ul>
                <li>Jadwal Donor: Setiap Sabtu pukul 09.00 - 14.00</li>
                <li>Lokasi: PMI Kota Bandung, Jalan RE Martadinata No. 45</li>
                <li>Kategori: Semua golongan darah diterima</li>
            </ul>
            <a href="donor_darah.html" className="btn btn-outline-primary btn-lg">Pelajari Lebih Lanjut</a>
        </div>

        {/* Right Box */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light rounded-4">
            <img src="https://via.placeholder.com/400" alt="Hero Image" className="img-fluid rounded-4" />
        </div>
    </div>
</div>

  );
}

export default Home;
