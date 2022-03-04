import {
    AccountBalance as AccountBalanceIcon,
    AutoGraph as AutoGraphIcon,
    Home as HomeIcon,
    Logout as SignOutIcon,
} from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material/";
import React from "react";
import { useNavigate } from "react-router-dom";

const UpperDrawerList = [
    {
        icon: <HomeIcon />,
        text: "Home",
        path: "/",
    },
    {
        icon: <AccountBalanceIcon />,
        text: "Investments",
        path: "/investments",
    },
    {
        icon: <AutoGraphIcon />,
        text: "Projections",
        path: "/projections",
    },
];

const BottomDrawerList = [
    {
        icon: <SignOutIcon />,
        text: "Sign Out",
        path: "/",
    },
];

const SideDrawer = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();

    const toggleDrawer = (flag) => () => {
        setIsOpen(flag);
    };

    return (
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
            <Box
                sx={{
                    width: 250,
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List>
                    {UpperDrawerList.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => {
                                navigate(item.path);
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <List>
                    {BottomDrawerList.map((item) => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => {
                                navigate(item.path);
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideDrawer;
