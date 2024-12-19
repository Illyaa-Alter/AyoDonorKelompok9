import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useLocation } from 'react-router-dom';
import Dayjs from 'dayjs';
import AxiosInstance from './axios';
import { CircularProgress, Box } from '@mui/material';
import '../style/home.css';

function DetailPendaftar() {
  const location = useLocation();
  const data = location.state?.detail;

  const [klinikName, setKlinikName] = useState('Loading...');
  const [daerahName, setDaerahName] = useState('Loading...');
  const [nomorKlinik, setNomorKlinik] = useState('Loading...');
  const [alamatKlinik, setAlamatKlinik] = useState('Loading...');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        if (data?.klinik) {
          const klinikRes = await AxiosInstance.get(`klinik/${data.klinik}/`);
          setKlinikName(klinikRes.data.name || 'Unknown');
          setNomorKlinik(klinikRes.data.nomor || 'Unknown');
          setAlamatKlinik(klinikRes.data.alamat || 'Unknown');
        }

        if (data?.daerah) {
          const daerahRes = await AxiosInstance.get(`daerah/${data.daerah}/`);
          setDaerahName(daerahRes.data.name || 'Unknown');
        }
      } catch (error) {
        console.error('Error fetching details:', error);
        setKlinikName('Unknown');
        setDaerahName('Unknown');
        setNomorKlinik('Unknown');
        setAlamatKlinik('Unknown');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [data]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ); 
  }

  if (!data) {
    return <p>Data tidak ditemukan!</p>;
  }




  return (
    
    <div className="container-fluid hero-section" 
    style={{ 
        backgroundColor: '#f8f9fa',  
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '100px', 
    }}
>
    <div className="row w-75 shadow-lg rounded-4 bg-white p-5 mb-5">

        <div className="col-12 text-center mb-4">
            <h3 className="text-dark font-weight-bold" style={{ fontSize: '1.5rem' }}>Detail Pendaftar</h3>
        </div>


        <div className="col-md-6 p-3 d-flex flex-column">
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Nama:</h5>
                <p>{data.name}</p>
            </div>
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">NIM:</h5>
                <p>{data.nim}</p>
            </div>
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Jenis Kelamin:</h5>
                <p>{data.jenis_kelamin}</p>
            </div>
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Daerah Domisili:</h5>
                <p>{daerahName}</p>
            </div>
        </div>

        <div className="col-md-6 p-3 d-flex flex-column">
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Klinik:</h5>
                <p>{klinikName}</p>
            </div>
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Nomor Telpon:</h5>
                <p>{nomorKlinik}</p>
            </div>
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Alamat Klinik:</h5>
                <p>{alamatKlinik}</p>
            </div>
        </div>

        <div className="col-md-6 p-3 d-flex flex-column">
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Status:</h5>
                <p>{data.status}</p>
            </div>
        </div>

 
        <div className="col-md-6 p-3 d-flex flex-column">
            <div className="mb-2 p-2" style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Tanggal Mulai:</h5>
                <p>{Dayjs(data.start_date).format('DD-MM-YYYY')}</p>
            </div>
            <div className="mb-2 p-2 " style={{ fontSize: '0.9rem' }}>
                <h5 className="font-weight-bold fs-6">Tanggal Akhir:</h5>
                <p>{Dayjs(data.end_date).format('DD-MM-YYYY')}</p>
            </div>
        </div>
        <div className="col-md-6 p-3 d-flex flex-column">
          <a href="">Kembali</a>
        </div>
    </div>
</div>



  );
}

export default DetailPendaftar;
