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
        // New ratio after change.
        let newRatioSum = _.sumBy(salaryBreakdown, "ratio");

        // Index of Fixed Index.
        const nonVariableIndex = _.findIndex(salaryBreakdown, "isFixed");

        if (newRatioSum !== 100) {
            const prevSalaryBreakdown = [...salaryBreakdown];

            // Ratio to be settled.
            let difference = 100 - newRatioSum;
            const nonVariableElementRatio =
                prevSalaryBreakdown[nonVariableIndex].ratio;

            // If the ratio can be settled by the fixed variable only.
            if (nonVariableElementRatio + difference > 0) {
                prevSalaryBreakdown[nonVariableIndex].ratio += difference;
            }

            // If the ratio can not be settled by the fixed variable only.
            else {
                // Explicitly making the fixed variable's value as "0".
                prevSalaryBreakdown[nonVariableIndex].ratio = 0;

                // New ratio after change.
                newRatioSum = _.sumBy(prevSalaryBreakdown, "ratio");

                // New ratio to be settled.
                difference = 100 - newRatioSum;

                // Looping through all the elements.
                for (
                    let index = 0;
                    index < prevSalaryBreakdown.length;
                    index++
                ) {
                    let ratio = prevSalaryBreakdown[index].ratio;

                    // 1. If the difference is still less then 0.
                    // 2. If the ratio is more than 0.
                    // 3. If the element is not the changed element.
                    if (difference < 0 && ratio > 0 && index !== changedIndex) {
                        // If difference is equal to or greater than the current ratio, adjust the difference.
                        if (ratio >= -difference) {
                            prevSalaryBreakdown[index].ratio =
                                ratio + difference;
                        } else {
                            prevSalaryBreakdown[index].ratio = 0;
                        }

                        // Reduce the negative difference by the ratio.
                        difference += ratio;
                    }
                }
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
                                        disabled={mainCategory.isFixed}
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
