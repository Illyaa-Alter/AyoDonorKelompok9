import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AxiosInstance from "./axios";
import Dayjs from "dayjs";
import { Box, IconButton } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';
import { Edit as EditIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; 

function Riwayat() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendaftarans, setPendaftarans] = useState([]);
  const [kliniks, setKliniks] = useState([]);
  const [daerahs, setDaerahs] = useState([]); 
  const navigate = useNavigate(); 

  const getData = async () => {
    try {
      // Mengambil data pendaftaran
      const res = await AxiosInstance.get("pendaftaran/");
      setMyData(res.data);

      // Mengambil data klinik
      const klinikRes = await AxiosInstance.get("klinik/");
      setKliniks(klinikRes.data);

      // Mengambil data daerah
      const daerahRes = await AxiosInstance.get("daerah/");
      setDaerahs(daerahRes.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Fungsi untuk mencari nama pendaftar berdasarkan id
  const getPendaftarName = (pendaftarId) => {
    const pendaftar = pendaftarans.find(p => p.id === pendaftarId);
    return pendaftar ? pendaftar.name : 'Unknown';
  };

  // Fungsi untuk mencari nama klinik berdasarkan id
  const getKlinikName = (klinikId) => {
    const klinik = kliniks.find(k => k.id === klinikId);
    return klinik ? klinik.name : 'Unknown';
  };

  // Fungsi untuk mencari nama daerah berdasarkan id
  const getDaerahName = (daerahId) => {
    const daerah = daerahs.find(d => d.id === daerahId);
    return daerah ? daerah.name : 'Unknown';
  };

  // Define columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
      },
      {
        accessorKey: "nim",
        header: "NIM",
        size: 150,
      },
      {
        accessorKey: "jenis_kelamin",
        header: "Jenis Kelamin",
        size: 150,
      },
      {
        accessorKey: "daerah",
        header: "Daerah",
        size: 150,
        accessorFn: (row) => getDaerahName(row.daerah),
      },
      {
        accessorKey: "klinik",
        header: "Klinik",
        size: 150,
        accessorFn: (row) => getKlinikName(row.klinik),
      },
      {
        accessorFn: (row) => Dayjs(row.start_date).format("DD-MM-YYYY"),
        header: "Start Date",
        size: 150,
      },
      {
        accessorFn: (row) => Dayjs(row.end_date).format("DD-MM-YYYY"),
        header: "End Date",
        size: 150,
      },
    ],
    [pendaftarans, kliniks, daerahs]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={myData}
      isLoading={loading}
      renderRowActions={({ row }) => (
        <Box display="flex" justifyContent="space-between">
          <IconButton
            color="primary"
            onClick={() => navigate(`/detail/${row.original.id}`, { state: row.original })}
          >
            <EditIcon />
          </IconButton>
          
        </Box>
      )}
    />
  );
}

export default Riwayat;
