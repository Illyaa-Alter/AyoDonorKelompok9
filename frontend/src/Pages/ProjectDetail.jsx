import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AxiosInstance from './axios'; // Pastikan ini adalah file yang sesuai

function ProjectDetail() {
  const { state } = useLocation(); // Mengambil data dari state
  const [projectManagers, setProjectManagers] = useState([]);
  const [projectData, setProjectData] = useState(state?.rowData);

  useEffect(() => {
    // Mengambil data Project Manager
    const fetchProjectManagers = async () => {
      try {
        const res = await AxiosInstance.get("projectmanager/");
        setProjectManagers(res.data);
      } catch (error) {
        console.error("Error fetching project managers:", error);
      }
    };
    
    fetchProjectManagers();
  }, []);

  // Fungsi untuk mencari nama project manager berdasarkan ID
  const getProjectManagerName = (projectManagerId) => {
    const manager = projectManagers.find(manager => manager.id === projectManagerId);
    return manager ? manager.name : 'Unknown'; // Mengembalikan nama manager atau 'Unknown' jika tidak ditemukan
  };

  if (!projectData) {
    return <div>Data not found!</div>;
  }

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Project Details</h2>
      <p><strong>Name:</strong> {projectData.name}</p>
      <p><strong>Status:</strong> {projectData.status}</p>
      <p><strong>Comments:</strong> {projectData.comments}</p>
      <p><strong>Project Manager:</strong> {getProjectManagerName(projectData.projectmanager)}</p>
      <p><strong>Start Date:</strong> {projectData.start_date}</p>
      <p><strong>End Date:</strong> {projectData.end_date}</p>
    </div>
  );
}

export default ProjectDetail;
