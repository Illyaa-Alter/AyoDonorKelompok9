import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Pendaftaran() {
    return (
        <div className="">
            <br />
            <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
                <div className="row border rounded-4 p-3 bg-white shadow box-area w-75">
                    {/* Left Box */}
                    <div className="col-md-6 px-5">
                    <h3 className="text-center mt-3 mb-4">Pendaftaran</h3>
                        <form>

                            {/* Input Nama Lengkap */}
                            <div className="mb-4">
                                <label htmlFor="nama-lengkap" className="form-label">Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg bg-light fs-6"
                                    id="nama-lengkap"
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
                                    required
                                />
                            </div>

                            
                            {/* Pilihan Jenis Kelamin */}
                            <div className="mb-4">
                                <label htmlFor="jenis_kelamin" className="form-label">Jenis Kelamin</label>
                                <select
                                    id="jenis_kelamin"
                                    className="form-control form-control-lg bg-light fs-6"
                                    defaultValue=""
                                    required>
                                    <option value="" disabled hidden>-- Pilih Jenis Kelamin --</option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>

                            {/* Pilihan Kota */}
                            <div className="mb-4">
                                <label htmlFor="kota" className="form-label">Kota / Kabupaten</label>
                                <select
                                    id="kota"
                                    className="form-control form-control-lg bg-light fs-6"
                                    defaultValue=""
                                    required>
                                    <option value="" disabled hidden>-- Pilih Kota --</option>
                                    <option value="Kota Bandung">Kota Bandung</option>
                                    <option value="Kabupaten Bandung">Kabupaten Bandung</option>
                                    <option value="Kabupaten Bandung Barat">Kabupaten Bandung Barat</option>
                                </select>
                            </div>

                            {/* Pilihan Daerah */}
                            <div className="mb-4">
                                <label htmlFor="daerah" className="form-label">Daerah</label>
                                <select
                                    id="daerah"
                                    className="form-control form-control-lg bg-light fs-6"
                                    defaultValue=""
                                    required>
                                    <option value="" disabled hidden>-- Pilih Daerah --</option>
                                    <option value="Sukasari">Sukasari</option>
                                    <option value="Sukajadi">Sukajadi</option>
                                    <option value="Lembang">Lembang</option>
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
