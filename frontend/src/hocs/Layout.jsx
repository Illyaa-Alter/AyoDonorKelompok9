import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "../components/Nabvar";

function Layout(props) {
    return(
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};

export default Layout;