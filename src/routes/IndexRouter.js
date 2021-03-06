import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Investments from "../pages/Investments";
import Projections from "../pages/Projections";
import SalaryBreakdown from "../pages/SalaryBreakdown";

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/projections" element={<Projections />} />
            <Route path="/salary-breakdown" element={<SalaryBreakdown />} />
        </Routes>
    );
};

export default IndexRouter;
