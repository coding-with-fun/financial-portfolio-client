import {
    Backdrop,
    Box,
    Fade,
    Grid,
    InputAdornment,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import _ from "lodash";
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

const MainCategoriesModal = (props) => {
    const [salaryBreakdown, setSalaryBreakdown] = useState(
        props.salaryBreakdown
    );
    const [changedIndex, setChangedIndex] = useState();

    const calculateRatio = () => {
        const newRatioSum = _.sumBy(salaryBreakdown, "ratio");

        if (newRatioSum !== 100) {
            console.log(salaryBreakdown.length, changedIndex);
            const prevSalaryBreakdown = [...salaryBreakdown];
            const difference = 100 - newRatioSum;
            if (salaryBreakdown.length - 1 !== changedIndex) {
                _.last(prevSalaryBreakdown).ratio += difference;
            } else {
                prevSalaryBreakdown[0].ratio += difference;
            }
            setSalaryBreakdown(prevSalaryBreakdown);
            props.setSalaryBreakdown(prevSalaryBreakdown);
        }
    };

    const handleChangePercentageOnInput = (event, index) => {
        const inputValue = _.get(event, "target.value");

        if (inputValue < 101) {
            const prevSalaryBreakdown = [...salaryBreakdown];
            prevSalaryBreakdown[index].ratio = Boolean(inputValue)
                ? parseInt(inputValue)
                : 0;
            setSalaryBreakdown(prevSalaryBreakdown);
            setChangedIndex(index);
        }
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.isMainCategoriesModalOpen}
            onClose={props.handleMainCategoriesModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.isMainCategoriesModalOpen}>
                <Box sx={style}>
                    {salaryBreakdown.map((mainCategory, index) => {
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
                                key={mainCategory._id}
                            >
                                <Grid item xs={5}>
                                    <Typography
                                        variant="subtitle1"
                                        component="label"
                                    >
                                        {mainCategory.title}
                                    </Typography>
                                </Grid>

                                <Grid item xs={7}>
                                    <TextField
                                        variant="outlined"
                                        size="small"
                                        value={mainCategory.ratio}
                                        onChange={(event) => {
                                            handleChangePercentageOnInput(
                                                event,
                                                index
                                            );
                                        }}
                                        onBlur={calculateRatio}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    %
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        );
                    })}
                </Box>
            </Fade>
        </Modal>
    );
};

export default MainCategoriesModal;
