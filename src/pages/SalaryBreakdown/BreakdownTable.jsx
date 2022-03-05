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
import _, { parseInt } from "lodash";
import React, { Fragment } from "react";
import { RoundToTwoDecimals } from "../../utils/RoundToTwoDecimals";

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
                aria-label="salary table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>

                        <TableCell>Ratio</TableCell>

                        <TableCell>Main amount</TableCell>

                        <TableCell>Sub-category description</TableCell>

                        <TableCell>Sub-category ratio</TableCell>

                        <TableCell>Sub-category amount</TableCell>

                        <TableCell>% of salary</TableCell>

                        <TableCell>Bank</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.salaryBreakdown.map((item) => {
                        const mainAmount = parseInt(
                            (props.monthlySalary * item.ratio) / 100
                        );
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
                                        categoryPercentage = RoundToTwoDecimals(
                                            (100 * category.amount) / mainAmount
                                        );
                                    }
                                    if (categoryPercentage) {
                                        remainingPercentage -=
                                            categoryPercentage;
                                    } else {
                                        categoryPercentage =
                                            RoundToTwoDecimals(
                                                remainingPercentage
                                            );
                                    }

                                    const categoryAmount =
                                        category.amount ||
                                        parseInt(
                                            (categoryPercentage * mainAmount) /
                                                100
                                        );
                                    const salaryToCategoryRatio =
                                        RoundToTwoDecimals(
                                            (categoryAmount * 100) /
                                                props.monthlySalary
                                        );

                                    totalCategoryAmount += categoryAmount;
                                    totalSalaryToCategoryRatio +=
                                        salaryToCategoryRatio;

                                    return (
                                        <TableRow key={category._id}>
                                            <TableCell>
                                                {category.title}
                                            </TableCell>

                                            <TableCell>
                                                {categoryPercentage}%
                                            </TableCell>

                                            <TableCell>
                                                {categoryAmount} INR
                                            </TableCell>

                                            <TableCell>
                                                {salaryToCategoryRatio}%
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
                        <TableCell />

                        <TableCell>{totalRatio}%</TableCell>

                        <TableCell>{totalMainAmount} INR</TableCell>

                        <TableCell />

                        <TableCell />

                        <TableCell>{totalCategoryAmount} INR</TableCell>

                        <TableCell>{totalSalaryToCategoryRatio}%</TableCell>

                        <TableCell />
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BreakdownTable;
