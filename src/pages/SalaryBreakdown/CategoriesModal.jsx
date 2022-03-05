import {
    Backdrop,
    Box,
    Fade,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    TextField,
} from "@mui/material";
import React, { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // minWidth: "40vw",
    width: "80vw",
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
        console.log(event.target.value);
        setSelectedMainCategoryIndex(event.target.value);
    };

    console.log(salaryBreakdown[selectedMainCategoryIndex].categories);

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
                            mt: 1,
                            mb: 1,
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

                    {salaryBreakdown[selectedMainCategoryIndex].categories.map(
                        (category) => {
                            return (
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{
                                        xs: 1,
                                        sm: 2,
                                        md: 3,
                                    }}
                                    sx={{
                                        m: "1rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    key={category._id}
                                >
                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            value={category.title}
                                            label="Title"
                                        />
                                    </Grid>

                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            value={category.amount || 0}
                                            label="Amount"
                                        />
                                    </Grid>

                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            value={category.ratio || 0}
                                            label="Ratio"
                                        />
                                    </Grid>

                                    <Grid item xs={3}>
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            value={category.bank}
                                            label="Bank"
                                        />
                                    </Grid>
                                </Grid>
                            );
                        }
                    )}
                </Box>
            </Fade>
        </Modal>
    );
};

export default CategoriesModal;
