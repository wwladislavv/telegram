import React from 'react';

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

const SidebarChatListItem = () => {
    return (
        <ListItemButton alignItems="flex-start">
            <ListItemAvatar
                sx={{
                    m: 0,
                }}
            >
                <Avatar
                    alt="Chat Name"
                    src="..."
                    sx={{
                        height: 54,
                        width: 54,
                    }}
                />
            </ListItemAvatar>
            <ListItemText
                primary="Chat Name"
                secondary="last message"
                sx={{
                    pl: '9px',
                }}
            />
        </ListItemButton>
    );
};

export default SidebarChatListItem;
