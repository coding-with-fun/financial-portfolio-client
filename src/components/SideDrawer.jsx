import {
    Mail as MailIcon,
    MoveToInbox as InboxIcon,
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

const SideDrawer = ({ isOpen, setIsOpen }) => {
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
                    {["Inbox", "Starred", "Send email", "Drafts"].map(
                        (text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default SideDrawer;
