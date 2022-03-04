import { Button, Container, InputAdornment, TextField } from "@mui/material";
import _ from "lodash";
import React, { Fragment, useState } from "react";
import CategoriesModal from "./CategoriesModal";
import MainCategoriesModal from "./MainCategoriesModal";

const Menu = (props) => {
    const [isMainCategoriesModalOpen, setIsMainCategoriesModalOpenOpen] =
        useState(false);
    const [isCategoriesModalOpen, setIsCategoriesModalOpenOpen] =
        useState(false);
    const [monthlySalary, setMonthlySalary] = useState(props.monthlySalary);

    const handleMainCategoriesModal = () => {
        setIsMainCategoriesModalOpenOpen((isMainCategoriesModalOpen) => {
            return !isMainCategoriesModalOpen;
        });
    };

    const handleCategoriesModal = () => {
        setIsCategoriesModalOpenOpen((isCategoriesModalOpen) => {
            return !isCategoriesModalOpen;
        });
    };

    const handleSetMonthlySalary = () => {
        props.setMonthlySalary(monthlySalary);
    };

    const handleChangeMonthlySalary = (event) => {
        const inputValue = parseInt(_.get(event, "target.value"));
        setMonthlySalary(inputValue);
    };

    return (
        <Fragment>
            <MainCategoriesModal
                isMainCategoriesModalOpen={isMainCategoriesModalOpen}
                handleMainCategoriesModal={handleMainCategoriesModal}
                salaryBreakdown={props.salaryBreakdown}
                setSalaryBreakdown={props.setSalaryBreakdown}
            />

            <CategoriesModal
                isCategoriesModalOpen={isCategoriesModalOpen}
                handleCategoriesModal={handleCategoriesModal}
                salaryBreakdown={props.salaryBreakdown}
                setSalaryBreakdown={props.setSalaryBreakdown}
            />

            <Container
                sx={{
                    m: "1rem 0",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "1rem",
                }}
            >
                <TextField
                    variant="outlined"
                    size="small"
                    label="Monthly Salary"
                    value={monthlySalary}
                    onChange={handleChangeMonthlySalary}
                    onBlur={handleSetMonthlySalary}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">INR</InputAdornment>
                        ),
                    }}
                />

                <Button variant="outlined" onClick={handleMainCategoriesModal}>
                    Change breakdown
                </Button>

                <Button variant="outlined" onClick={handleCategoriesModal}>
                    Edit categories
                </Button>
            </Container>
        </Fragment>
    );
};

export default Menu;
