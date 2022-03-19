import React from 'react';

import List from "@mui/material/List";

import SidebarChatListItem from './chat-list-item';

const SidebarChatList = () => {
    return (
        <List sx={{
            width: '100%',
            height: '100%',
        }}>
            <SidebarChatListItem />
        </List>
    );
};

export default SidebarChatList;
