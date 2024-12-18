import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router v6
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import { Provider } from 'react-redux'; // Import Provider dari 'react-redux'
// import store from './store'; // Import store Redux dari file 'store'
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Pendaftaran from './containers/Pendaftaran';

import Home from './Pages/Home';
import About from './Pages/About';
import Create from './Pages/Create';
import Riwayat from './Pages/Riwayat';
import ProjectDetail from './Pages/ProjectDetail';
import History from './Pages/History';

import Layout from './hocs/Layout';

function App() {
    return (
        // <Provider store={store}> {/* Menyediakan store Redux */}
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Create" element={<Create />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/riwayat" element={<History />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
            </Layout>
        </Router>
        // </Provider>
    );
}

export default App;
