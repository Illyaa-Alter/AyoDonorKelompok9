import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Pendaftaran() {
    const [nama, setNama] = useState("");
    const [nik, setNik] = useState("");
    const [tanggalLahir, setTanggalLahir] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [daerahList, setDaerahList] = useState([{'id' : '', 'name' : '', 'kota' : ''},]); // List of all daerah
    const [daerah, setDaerah] = useState([]); // Selected daerah based on id

    // Fetch daerah data from API
    useEffect(() => {
        const fetchDaerah = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/daerah/');
                if (response.status === 200) {
                    setDaerahList(response.data); // Update state with all daerah
                }
            } catch (err) {
                console.error(err);
                alert("Gagal memuat daftar daerah.");
            }
        };
        fetchDaerah();
    }, []);

    const handleDaerahChange = (event) => {
        const selectedDaerahId = parseInt(event.target.value, 10);
        const filteredDaerah = daerahList.filter(daerah => daerah.id === selectedDaerahId);
        setDaerah(filteredDaerah); // Update selected daerah
    };

const addPendonor = async () => {
    try {
        const pendonorData = {
            nama,
            nik,
            tanggal_lahir: tanggalLahir,
            jenis_kelamin: jenisKelamin,
            daerah: daerah.id // Mengambil ID daerah sebagai string
        };
        const response = await axios.post("http://127.0.0.1:8000/pendonor/", pendonorData, {
            headers: {
                "Content-type": "application/json"
            }
        });

        // Reset form setelah data berhasil dikirim
        setNama("");
        setNik("");
        setTanggalLahir("");
        setJenisKelamin("");
        setDaerah(""); 

        // Alert sukses
        alert("Pendonor berhasil dibuat!");

    } catch (err) {
        console.error(err);
        
        if (err.response) {
            alert(`Gagal membuat pendonor: ${err.response.data.detail || 'Terjadi kesalahan.'}`);
        } else if (err.request) {
            alert("Gagal membuat pendonor: Tidak ada respon dari server.");
        } else {
            alert(`Gagal membuat pendonor: ${err.message}`);
        }
    }
};


    return (
        <div className="">
            <br />
            <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border rounded-4 p-3 bg-white shadow box-area w-75">
                    {/* Left Box */}
                    <div className="col-md-6 px-5">
                        <h3 className="text-center mt-3 mb-4">Pendaftaran</h3>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            addPendonor();
                        }}>

                            {/* Input Nama Lengkap */}
                            <div className="mb-4">
                                <label htmlFor="nama-lengkap" className="form-label">Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    id="nama-lengkap"
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    placeholder="Masukkan Nama Lengkap Anda"
                                    required
                                />
                            </div>

                            {/* Input NIK */}
                            <div className="mb-4">
                                <label htmlFor="nik" className="form-label">NIK</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    id="nik"
                                    value={nik}
                                    onChange={(e) => setNik(e.target.value)}
                                    placeholder="Masukkan NIK Anda"
                                    required
                                />
                            </div>

                            {/* Input Tanggal Lahir */}
                            <div className="mb-4">
                                <label htmlFor="tanggal-lahir" className="form-label">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    className="form-control form-control-lg bg-light fs-6"
                                    id="tanggal-lahir"
                                    value={tanggalLahir}
                                    onChange={(e) => setTanggalLahir(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Pilihan Jenis Kelamin */}
                            <div className="mb-4">
                                <label htmlFor="jenis_kelamin" className="form-label">Jenis Kelamin</label>
                                <select
                                    id="jenis_kelamin"
                                    className="form-control form-control-lg bg-light fs-6"
                                    value={jenisKelamin}
                                    onChange={(e) => setJenisKelamin(e.target.value)}
                                    required
                                >
                                    <option value="" disabled hidden>-- Pilih Jenis Kelamin --</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>

                            {/* Pilihan Daerah */}
                            <div className="mb-4">
                                <label htmlFor="daerah" className="form-label">Daerah</label>
                                <select
                                    id="daerah"
                                    className="form-control form-control-lg bg-light fs-6"
                                    onChange={handleDaerahChange}
                                    required>
                                    <option value="" disabled>-- Pilih Daerah --</option>
                                    {daerahList.map(daerah => (
                                        <option key={daerah.id} value={daerah.id}>{daerah.nama}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Tombol Submit */}
                            <div className="mb-4">
                                <button type="submit" className="btn btn-primary btn-lg w-100 fs-6">
                                    Lanjut
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Box */}
                    <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box bg-birumuda">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pendaftaran;
