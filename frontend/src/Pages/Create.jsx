import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Box, Button } from '@mui/material';
import MyTextField from "./forms/TextField";
import MySelectField from "./forms/MySelectField";
import MyDateField from "./forms/MyDateField";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AxiosInstance from "./axios";
import Dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

function Create() {
  const [daerah, setDaerah] = useState([]); // Data untuk 'daerah'
  const [klinik, setKlinik] = useState([]); // Data untuk 'klinik'
  const [loading, setLoading] = useState(true); // Status loading

  const jenisKelaminOptions = [
    { id: 'Laki-laki', name: 'Laki-laki' },
    { id: 'Perempuan', name: 'Perempuan' },
  ];

  // Mengambil data daerah dan klinik dari server
  const fetchData = async () => {
    try {
      const [resDaerah, resKlinik] = await Promise.all([
        AxiosInstance.get("daerah/"),
        AxiosInstance.get("klinik/"),
      ]);
      setDaerah(resDaerah.data);
      setKlinik(resKlinik.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const defaultValue = {
    name: '',
    nim: '',
    jenis_kelamin: '',
    daerah: '',
    start_date: null,
    klinik: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Nama harus diisi'),
    nim: yup.string().required('NIM harus diisi'),
    jenis_kelamin: yup.string().required('Jenis Kelamin harus diisi'),
    daerah: yup.string().required('Daerah harus diisi'),
    start_date: yup.date().required('Tanggal mulai harus diisi'),
    klinik: yup.string().required('Klinik harus diisi'),
  });

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(schema),
  });

  const submission = async (data) => {
    const formattedDate = Dayjs(data.start_date).format("YYYY-MM-DD");

    try {
      await AxiosInstance.post("pendaftaran/", {
        name: data.name,
        nim: data.nim,
        jenis_kelamin: data.jenis_kelamin,
        daerah: data.daerah,
        start_date: formattedDate,
        klinik: data.klinik,
      });
      alert("Data berhasil disimpan!");
      navigate(`/`);
    } catch (error) {
      alert("Terjadi kesalahan saat menyimpan data!");
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <br /><br /><br /><br /><br /><br /><br /><br />
      {loading ? (
        <p>Loading Data...</p>
      ) : (
        <form onSubmit={handleSubmit(submission)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginBottom: '10px',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px', flexDirection: 'row' }}>
              <MyTextField
                width="30%"
                label="Nama"
                name="name"
                control={control}
                placeholder="Masukkan nama"
              />
              <MySelectField
                width="30%"
                label="Klinik"
                name="klinik"
                control={control}
                options={klinik.map((item) => ({ id: item.id, name: item.name }))}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}>
              <MyTextField
                width="30%"
                label="NIM"
                name="nim"
                control={control}
                placeholder="Masukkan NIM"
              />
              <MyDateField
                width="30%"
                label="Tanggal Mulai"
                name="start_date"
                control={control}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', marginTop: '40px' }}>
              <MySelectField
                width="30%"
                label="Jenis Kelamin"
                name="jenis_kelamin"
                control={control}
                options={jenisKelaminOptions}
              />
              <Box sx={{ width: '30%' }}>

              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', marginTop: '40px' }}>
              <MySelectField
                width="30%"
                label="Daerah"
                name="daerah"
                control={control}
                options={daerah.map((item) => ({ id: item.id, name: item.name }))}
              />

              <Box sx={{ width: '30%' }}>
                <Button variant="contained" type="submit" sx={{ width: '100%' }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      )}
    </div>
  );
}

export default Create;
