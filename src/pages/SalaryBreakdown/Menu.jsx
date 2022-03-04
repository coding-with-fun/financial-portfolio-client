import { Button, Container } from "@mui/material";
import React, { Fragment, useState } from "react";
import CategoriesModal from "./CategoriesModal";
import MainCategoriesModal from "./MainCategoriesModal";

const Menu = (props) => {
    const [isMainCategoriesModalOpen, setIsMainCategoriesModalOpenOpen] =
        useState(false);
    const [isCategoriesModalOpen, setIsCategoriesModalOpenOpen] =
        useState(false);

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
            />

            <Container
                sx={{
                    m: "1rem 0",
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "1rem",
                }}
            >
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
