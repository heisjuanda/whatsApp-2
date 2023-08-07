import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

export const RoutesControl = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};