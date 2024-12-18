import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import '../style/Login.css';

function Signin2() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">
                {/* Left Box */}
                <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box bg-birumuda">
                    <div className="featured-image mb-3">
                        <img src="" alt="Gambar Fitur" className="img-fluid" style={{ width: '250px' }} />
                    </div>
                    <p className="text-white mt-3">Ini Halaman Login</p>
                </div>

                {/* Right Box */}
                <div className="col-md-6">
                    <h3 className="text-center mt-3 mb-4">Daftar</h3>
                    <form>
                        {/* Input Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control form-control-lg bg-light fs-6"
                                id="email"
                                placeholder="Masukkan Email Anda"
                                required
                            />
                        </div>

                        {/* Input Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-lg bg-light fs-6"
                                id="password"
                                placeholder="Masukkan Kata Sandi"
                                required
                            />
                        </div>

                        {/* Input Nama Lengkap */}
                        <div className="mb-3">
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
                        <div className="mb-3">
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
                        <div className="mb-3">
                            <label htmlFor="tanggal-lahir" className="form-label">Tanggal Lahir</label>
                            <input
                                type="date"
                                className="form-control form-control-lg bg-light fs-6"
                                id="tanggal-lahir"
                                required
                            />
                        </div>

                        {/* Pilihan Kota */}
                        <div className="mb-3">
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
                        <div className="mb-3">
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

                        {/* Checkbox Ingatkan Saya */}
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="formCheck"
                                    required
                                />
                                <label htmlFor="formCheck" className="form-check-label text-secondary">
                                    Ingatkan saya
                                </label>
                            </div>
                        </div>

                        {/* Tombol Submit */}
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-lg w-100 fs-6">
                                Lanjut
                            </button>
                        </div>

                        <div className="fs-6">
                            <small>
                                Sudah Mempunyai Akun? <a href="#">Masuk</a>
                            </small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin2;
