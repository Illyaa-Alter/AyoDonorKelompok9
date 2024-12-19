import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import Home from './Pages/Home';
import About from './Pages/About';
import Create from './Pages/Create';
import History from './Pages/History';
import DetailPendaftar from './Pages/DetailPendaftar';
import Info from './Pages/infokesehatan';

import Layout from './hocs/Layout';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="/Create" element={<Create />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/riwayat" element={<History />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/detailPendaftar/:id" element={<DetailPendaftar />} />

                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
