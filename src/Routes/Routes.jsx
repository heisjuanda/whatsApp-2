import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

import { Home } from "../components/Home/Home";
import { Register } from "../components/Register/Register";
import { Login } from "../components/Login/Login";

export const RoutesControl = () => {

    const currentUser = useContext(AuthContext);

    const ProtectedRoute = ({childer}) => {
        if (!currentUser) {
            return <Navigate to='/login' />
        }
        return childer;
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProtectedRoute childer={<Home />} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

RoutesControl.propTypes = {
    childer: PropTypes.func,
};