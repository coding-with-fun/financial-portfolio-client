import {
    Container,
    Table,
    TableBody,
    TableCell as MUITableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const TableCell = styled(MUITableCell)(() => ({
    border: "1px solid rgba(224, 224, 224, 1)",
}));

const BreakdownTable = () => {
    return (
        <TableContainer component={Container}>
            <Table
                sx={{
                    minWidth: 700,
                    border: "1px solid rgba(224, 224, 224, 1)",
                }}
                aria-label="spanning table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Break-down of the main %</TableCell>
                        <TableCell>Main amount</TableCell>
                        <TableCell>Break-down description</TableCell>
                        <TableCell>Break-down of the % break-down</TableCell>
                        <TableCell>Break-down amount</TableCell>
                        <TableCell>Round amount</TableCell>
                        <TableCell>% of salary</TableCell>
                        <TableCell>Bank</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell rowSpan={4}>Needs</TableCell>
                        <TableCell rowSpan={4}>20%</TableCell>
                        <TableCell rowSpan={4}>₹4,500.00</TableCell>
                        <TableCell>Cash in-hand</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Cash in-hand</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Cash in-hand</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Cash in-hand</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Wants</TableCell>
                        <TableCell>30%</TableCell>
                        <TableCell>₹6,750.00</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>Investments</TableCell>
                        <TableCell>50%</TableCell>
                        <TableCell>₹11,250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BreakdownTable;
