import React from 'react';

// import uuidv4 from 'uuid/v4';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import SidebarHeader from './components/sidebar/header';
import SidebarChatList from './components/sidebar/chat-list';

import './App.css';
import Avatar from "@mui/material/Avatar";

function App() {
    const [value, setValue] = React.useState('all');

    const handleChange = React.useCallback(
        (event: React.SyntheticEvent, newValue: string) => {
            setValue(newValue);
        },
        []
    );

    return (
    <Box
        className="App"
        sx={{
            display: 'grid',
            gap: 0,
            gridTemplateColumns: '1fr 2fr',
            height: '100%',
        }}
    >
        <Box
            className="sidebar"
            sx={{
                height: '100%',
                borderRight: 1,
                borderColor: 'divider'
            }}
        >
            <SidebarHeader />

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="All Chats" value="all" />
                    </TabList>
                </Box>
                <TabPanel
                    value="all"
                    sx={{
                        padding: 0,
                    }}
                >
                    <SidebarChatList />
                </TabPanel>
            </TabContext>
        </Box>

        <Box
            className="chat"
            sx={{
                height: '100%',
            }}
        >
            <Box
                className="chat-topbar"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: 56,
                    backgroundColor: '#ffffff',
                    boxShadow: 1,
                    padding: '0 16px',
                }}
            >
                <Box
                    className="chat-topbar-info"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        alt="Chat Name"
                        src="..."
                        sx={{
                            height: 42,
                            width: 42,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    </Box>
  );
}

export default App;
