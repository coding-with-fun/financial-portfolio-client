import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BreakdownTable from "./BreakdownTable";
import Menu from "./Menu";
import SalaryBreakdownData from "../../data/SalaryBreakdown.json";

const SalaryBreakdown = () => {
    const [salaryBreakdown, setSalaryBreakdown] = useState(SalaryBreakdownData);
    const [monthlySalary, setMonthlySalary] = useState(22500);

    return (
        <Box>
            <Typography
                variant="h4"
                component="div"
                sx={{
                    m: "1rem 0",
                    textAlign: "center",
                }}
            >
                Salary Breakdown
            </Typography>

            <Menu
                salaryBreakdown={salaryBreakdown}
                monthlySalary={monthlySalary}
                setSalaryBreakdown={setSalaryBreakdown}
                setMonthlySalary={setMonthlySalary}
            />

            <BreakdownTable
                salaryBreakdown={salaryBreakdown}
                monthlySalary={monthlySalary}
            />
        </Box>
    );
};

export default SalaryBreakdown;
