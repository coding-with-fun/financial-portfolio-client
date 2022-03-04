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
import _ from "lodash";
import React, { Fragment } from "react";

const TableCell = styled(MUITableCell)(() => ({
    border: "1px solid rgba(224, 224, 224, 1)",
}));

const BreakdownTable = (props) => {
    let totalRatio = 0;
    let totalMainAmount = 0;
    let totalCategoryAmount = 0;
    let totalSalaryToCategoryRatio = 0;

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

                        <TableCell>% of salary</TableCell>

                        <TableCell>Bank</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.salaryBreakdown.map((item) => {
                        const mainAmount =
                            (props.monthlySalary * item.ratio) / 100;
                        let remainingPercentage = 100;

                        totalRatio += item.ratio;
                        totalMainAmount += mainAmount;

                        return (
                            <Fragment key={item._id}>
                                <TableRow>
                                    <TableCell
                                        rowSpan={item.categories.length + 1}
                                    >
                                        {item.title}
                                    </TableCell>

                                    <TableCell
                                        rowSpan={item.categories.length + 1}
                                    >
                                        {item.ratio}%
                                    </TableCell>

                                    <TableCell
                                        rowSpan={item.categories.length + 1}
                                    >
                                        {mainAmount} INR
                                    </TableCell>
                                </TableRow>

                                {item.categories.map((category) => {
                                    let categoryPercentage = _.get(
                                        category,
                                        "ratio"
                                    );
                                    if (
                                        category.amount &&
                                        !categoryPercentage
                                    ) {
                                        categoryPercentage =
                                            (100 * category.amount) /
                                            mainAmount;
                                    }
                                    if (categoryPercentage) {
                                        remainingPercentage -=
                                            parseFloat(categoryPercentage);
                                    } else {
                                        categoryPercentage =
                                            remainingPercentage;
                                    }

                                    const categoryAmount =
                                        category.amount ||
                                        (categoryPercentage * mainAmount) / 100;
                                    const salaryToCategoryRatio =
                                        (categoryAmount * 100) /
                                        props.monthlySalary;

                                    totalCategoryAmount += categoryAmount;
                                    totalSalaryToCategoryRatio +=
                                        salaryToCategoryRatio;

                                    return (
                                        <TableRow key={category._id}>
                                            <TableCell>
                                                {category.title}
                                            </TableCell>

                                            <TableCell>
                                                {categoryPercentage.toFixed(2)}%
                                            </TableCell>

                                            <TableCell>
                                                {categoryAmount} INR
                                            </TableCell>

                                            <TableCell>
                                                {salaryToCategoryRatio.toFixed(
                                                    2
                                                )}
                                                %
                                            </TableCell>

                                            <TableCell>
                                                {category.bank}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </Fragment>
                        );
                    })}

                    <TableRow>
                        <TableCell></TableCell>

                        <TableCell>{totalRatio}%</TableCell>

                        <TableCell>{totalMainAmount} INR</TableCell>

                        <TableCell></TableCell>

                        <TableCell></TableCell>

                        <TableCell>{totalCategoryAmount} INR</TableCell>

                        <TableCell>{totalSalaryToCategoryRatio}%</TableCell>

                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BreakdownTable;
