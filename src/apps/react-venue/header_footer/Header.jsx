
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useEffect, useState } from 'react';
import '../resources/styles.css';
import SideDrawer from './SideDrawer';

const Header = () => {
    const[drawerOpen, setDrawerOpen] = useState(false)
    const[headerShow, setheaderShow] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                setheaderShow(false)
            }else {
                setheaderShow(true)
            }
        })
    },[headerShow])

    return (
        <AppBar position="fixed"
                style={{backgroundColor: headerShow? '#2f2f2f' : 'transparent'}}
                >
        <Toolbar>
            <div  style={{marginRight: "auto"}}>
                <div className='font_righteous header_logo_venue'>The Venue</div>
                <div className='header_logo_title'>Musical Event</div>
            </div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(prev => !prev)}
            >
            <MenuIcon />
          </IconButton>

          <SideDrawer open={drawerOpen}
                    onClose = {() => setDrawerOpen(prev => !prev)}
            />
        </Toolbar>
      </AppBar>
    );
};

export default Header;