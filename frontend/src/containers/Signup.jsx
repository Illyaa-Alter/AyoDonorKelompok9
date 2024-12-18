import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import '../style/Login.css';

function Signup() {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">

                <div className="Left-box col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box bg-birumuda">
                    <div className="featured-image mb-3">
                        <img src="" alt="Featured" className="img-fluid" style={{ width: '250px' }} />
                    </div>
                    <p className="text-white mt-3">Ini Halaman Daftar</p>
                </div>

                <div className="Right-box col-md-6">
                    <h3 className="text-center mt-3 mb-4">Daftar</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Alamat Email</label>
                            <input type="email" className="form-control form-control-lg bg-light fs-6" id="email" placeholder="Masukkan Email Anda" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Kata Sandi</label>
                            <input type="password" className="form-control form-control-lg bg-light fs-6" id="password" placeholder="Masukkan Kata Sandi Baru" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="confirm-password" className="form-label">Ulangi Kata Sandi</label>
                            <input type="password" className="form-control form-control-lg bg-light fs-6" id="confirm-password" placeholder="Ulangi Kata Sandi" />
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck" />
                                <label htmlFor="formCheck" className="form-check-label text-secondary">Ingatkan saya</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary btn-lg w-100 fs-6">Lanjut</button>
                        </div>
                    </form>
                    <div className="fs-6">
                        <small>Sudah Mempunyai Akun? <a href="/login">Masuk</a></small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
