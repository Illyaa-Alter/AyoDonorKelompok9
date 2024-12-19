import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import gambar from '../assets/Ini_gambar.png';

function Home() {
  return (
    <div>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-primary text-white pt-6">
        <div className="d-flex justify-content-between" style={{ width: "95%", height: "90%" }}>
          {/* Left Container */}
          <div
            className="container d-flex flex-column align-items-start justify-content-center text-white p-4"
            style={{ width: "48%", borderRadius: "16px", background: 'none'}}
          >
            <h1 className="mb-4 fs-2">
              Selamat Datang di <span style={{ fontWeight: "bold" }}>Portal Kami</span>
            </h1>
            <p className="lead mb-4 fs-6">
              Platform ini dirancang untuk membantu Anda mengelola informasi dengan lebih mudah dan efisien.
              Temukan berbagai fitur menarik yang kami sediakan.
            </p>
            <a href="/pendaftaran" className="btn btn-light btn-lg mt-5 text-primary">
              Mulai Sekarang
            </a>
          </div>

          <div
            className="container d-flex align-items-center justify-content-center text-dark"
            style={{ width: "48%", borderRadius: "16px", background: 'none'}}
          >
            <img
              src={gambar}
              alt="Descriptive Example"
              className="img-fluid rounded"
              style={{ maxHeight: "100%", maxWidth: "100%", marginTop : "100px", }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid hero-section py-5">
        <div className="row w-75 mx-auto shadow rounded-4 bg-white">
          {/* Left Box */}
          <div className="col-12 d-flex flex-column justify-content-start p-0">
            <div
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "40px",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
              }}
            >
              <h2 className="mb-3">Ayo Berdonasi!</h2>
              <p>
                Jadilah pahlawan dengan mendonorkan darah Anda! Informasi terkini tentang jadwal dan lokasi donor
                darah tersedia di platform kami.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "40px",
                borderBottomLeftRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            >
              <h2 className="mt-4">Informasi Donor Darah</h2>
              <p className="mb-3">
                Jadilah pahlawan dengan mendonorkan darah Anda! Informasi terkini tentang jadwal dan lokasi donor
                darah tersedia di platform kami.
              </p>
              <ul>
                <li>Jadwal Donor: Setiap Sabtu pukul 09.00 - 14.00</li>
                <li>Lokasi: PMI Kota Bandung, Jalan RE Martadinata No. 45</li>
                <li>Kategori: Semua golongan darah diterima</li>
              </ul>
              <a href="donor_darah.html" className="btn btn-outline-primary btn-lg">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
