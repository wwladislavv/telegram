import React from 'react';
import {v4 as uuidv4} from "uuid";

import {Box, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const sidebarMenuID = uuidv4();
const searchInputID = uuidv4();

const SidebarHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLSpanElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? sidebarMenuID : undefined;

    return (
        <Box
            className="sidebar-header"
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: 56,
                padding: '0 16px',
            }}
        >
            <IconButton
                sx={{
                    color: 'primary.light',
                }}
                aria-label="toggle menu"
                component="span"
                aria-describedby={id}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                Menu content
            </Popover>

            <TextField
                id={searchInputID}
                placeholder="Search"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                size="small"
                fullWidth
                sx={{
                    margin: '0 8px',
                }}
            />
        </Box>
    );
};

export default SidebarHeader;
