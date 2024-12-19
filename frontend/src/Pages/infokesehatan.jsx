import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Info() {
  return (
    <div className="container mt-4">
            <br /> <br /> <br />
      <div className="card">
        <div className="card-header">
          <h2>Informasi Donor Darah</h2>
        </div>
        <div className="card-body">
          <InfoSection
            title="Informasi Kesehatan"
            items={[
              'Usia pendonor: 17-60 tahun.',
              'Berat badan minimal: 45 kg.',
              'Tidak memiliki penyakit menular seperti HIV/AIDS.',
              'Tekanan darah normal: sistolik 100-160, diastolik 70-100.',
              'Interval donor: setiap 3 bulan sekali.'
            ]}
          />
          <InfoSection
            title="Panduan Donor Darah"
            items={[
              'Pastikan istirahat cukup sebelum mendonorkan darah.',
              'Konsumsi makanan sehat dan bergizi 3-4 jam sebelumnya.',
              'Minum air putih yang cukup sebelum proses donor.',
              'Jangan mendonorkan darah saat sedang sakit atau lelah.',
              'Ikuti arahan dari petugas kesehatan selama proses donor.'
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function InfoSection({ title, items }) {
  return (
    <div className="info-section mb-4">
      <h4>{title}</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Info;
