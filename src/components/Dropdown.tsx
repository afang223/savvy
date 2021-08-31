import React from 'react';
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const options = [
    'Profile',
    'Settings',
    'Logout'
];
  
const ITEM_HEIGHT = 48;

function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e: any) => {
        console.log(e.currentTarget);
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuRoundedIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '150px',
            },
          }}
        >
          {options.map((option: {} | null | undefined) => (
            <MenuItem selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
}

export default Dropdown;