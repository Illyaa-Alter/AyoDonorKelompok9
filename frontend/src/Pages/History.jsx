import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AxiosInstance from "./axios";
import Dayjs from "dayjs";
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk routing

function Riwayat() {
  const [registrationsData, setRegistrationsData] = useState([]);
  const [clinicsData, setClinicsData] = useState([]);
  const [regionsData, setRegionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);
    try {
      const res = await AxiosInstance.get("pendaftaran/");
      setRegistrationsData(res.data);

      const klinikRes = await AxiosInstance.get("klinik/");
      setClinicsData(klinikRes.data);

      const daerahRes = await AxiosInstance.get("daerah/");
      setRegionsData(daerahRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getPendaftarName = useMemo(() => (pendaftarId) => {
    const pendaftar = registrationsData.find(p => p.id === pendaftarId);
    return pendaftar ? pendaftar.name : 'Unknown';
  }, [registrationsData]);

  const getKlinikName = useMemo(() => (klinikId) => {
    const klinik = clinicsData.find(k => k.id === klinikId);
    return klinik ? klinik.name : 'Unknown';
  }, [clinicsData]);

  const getDaerahName = useMemo(() => (daerahId) => {
    const daerah = regionsData.find(d => d.id === daerahId);
    return daerah ? daerah.name : 'Unknown';
  }, [regionsData]);

  // Define columns
  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Name", size: 150 },
      { accessorKey: "nim", header: "NIM", size: 150 },
      { accessorKey: "jenis_kelamin", header: "Jenis Kelamin", size: 150 },
      { accessorKey: "daerah", header: "Daerah Domisili", size: 150, accessorFn: (row) => getDaerahName(row.daerah) },
      { accessorKey: "klinik", header: "Klinik", size: 150, accessorFn: (row) => getKlinikName(row.klinik) },
      { accessorFn: (row) => Dayjs(row.start_date).format("DD-MM-YYYY"), header: "Start Date", size: 150 },
      { accessorFn: (row) => Dayjs(row.end_date).format("DD-MM-YYYY"), header: "End Date", size: 150 },
      { accessorKey: "status", header: "Status", size: 150 },
    ],
    [registrationsData, clinicsData, regionsData]
  );

  return (
    <div className="container-fluid">
      <br />
      <br />
      <div className="text-center mt-5">
        {loading ? (
          <p>Loading Data...</p>
        ) : (
          <MaterialReactTable
            columns={columns}
            data={registrationsData}
            enableRowActions
            renderRowActions={({ row, table }) => (
              <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                <IconButton
                  color="secondary"
                  onClick={() => navigate(`/pendaftaran/${row.id}`)} // Navigating to the edit page
                >
                  <EditIcon />
                </IconButton>
              </Box>
            )}
          />
        )}
      </div>
    </div>
  );
}

export default Riwayat;
