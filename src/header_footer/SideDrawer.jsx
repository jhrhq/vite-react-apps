import { Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import scroller from 'react-scroll/modules/mixins/scroller';

const SideDrawer = ({open, onClose}) => {
    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150,
        });
        onClose(onclose)
    }
    return (
       
            <Drawer open={open}
                    onClose = {onClose}
                    anchor="right"
            >
                <List component='nav'>
                    <ListItem disablePadding>
                        <ListItemButton component="a"  onClick={() => scrollToElement('eventStarts')}>
                            <ListItemText primary = "Event Starts In" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a"  onClick={() => scrollToElement('venueinfo')}>
                            <ListItemText primary = "Venue Info" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a"  onClick={() => scrollToElement('highlights')}>
                            <ListItemText primary = "Highlights" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a"  onClick={() => scrollToElement('pricing')}>
                            <ListItemText primary = "Pricing" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a"  onClick={() => scrollToElement('location')}>
                            <ListItemText primary = "location" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
      
    );
};

export default SideDrawer;