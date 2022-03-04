import {
    Backdrop,
    Box,
    Fade,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
} from "@mui/material";
import React, { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "40vw",
    maxWidth: "90vw",
    backgroundColor: "background.paper",
    boxShadow: 24,
    borderColor: "transparent",
    borderRadius: "10px",
    p: "1rem 2rem",
};

const CategoriesModal = (props) => {
    const [salaryBreakdown, setSalaryBreakdown] = useState(
        props.salaryBreakdown
    );

    const [selectedMainCategoryIndex, setSelectedMainCategoryIndex] =
        useState(0);

    const handleMainCategoryTitle = (event) => {
        setSelectedMainCategoryIndex(event.target.value);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.isCategoriesModalOpen}
            onClose={props.handleCategoriesModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.isCategoriesModalOpen}>
                <Box sx={style}>
                    <FormControl
                        sx={{
                            m: 1,
                            width: 200,
                        }}
                    >
                        <InputLabel id="demo-simple-select-autowidth-label">
                            Main Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={selectedMainCategoryIndex}
                            onChange={handleMainCategoryTitle}
                            autoWidth
                            label="Main Category"
                        >
                            {salaryBreakdown.map((category, index) => {
                                return (
                                    <MenuItem value={index} key={index}>
                                        {category.title}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Box>
            </Fade>
        </Modal>
    );
};

export default CategoriesModal;
