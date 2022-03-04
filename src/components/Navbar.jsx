import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import SideDrawer from "./SideDrawer";

const Navbar = () => {
    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

    return (
        <Fragment>
            <SideDrawer
                isOpen={isSideDrawerOpen}
                setIsOpen={setIsSideDrawerOpen}
            />

            <Box
                sx={{
                    flexGrow: 1,
                }}
            >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                            }}
                            onClick={() => setIsSideDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            FinPlan
                        </Typography>
                        <Typography
                            variant="button"
                            component="span"
                            sx={{
                                textTransform: "uppercase",
                                cursor: "pointer",
                            }}
                        >
                            Sign In
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </Fragment>
    );
};

export default Navbar;
