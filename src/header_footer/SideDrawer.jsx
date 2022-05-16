import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

const SideDrawer = ({open, onClose}) => {
    return (
       
            <Drawer open={open}
                    onClose = {onClose}
                    anchor="right"
            >
                <List component='nav'>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary = "Event Starts In" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary = "Venue Info" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary = "Highlights" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary = "Pricing" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
      
    );
};

export default SideDrawer;