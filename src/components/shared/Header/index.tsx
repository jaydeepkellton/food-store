/* eslint-disable react/prop-types */

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar } from "@mui/material";

import { AppBar } from "../MUI-Drawer/MUI-Drawer-Style";
import "./header.scss";

const Header: React.FC<{
  setOpen?: any;
  drawerState?: boolean;
  sidebar?: boolean;
}> = ({
  setOpen = () => {
    return;
  },
  drawerState = false,
  sidebar = true,
}) => {
  return (
    <AppBar position='fixed' open={drawerState} style={{ boxShadow: "none" }}>
      <Toolbar className='justify-content-between header-main'>
        <div className='d-flex'>
          {sidebar && (
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={() => {
                setOpen(!drawerState);
              }}
              edge='start'
              sx={{
                marginRight: 2,
                color: "#001B66",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <h1>Food Store</h1>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
