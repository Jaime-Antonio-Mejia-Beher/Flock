import * as React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


const menuContainerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#FFFFFF',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between', // Positions logo and buttons at opposite ends
  alignItems: 'center',
};

const logoStyle = {
  width: '100px',
  height: 'auto',
};

const buttonStyle = {
  backgroundColor: '#EBF8FF',
  marginRight: '15px'
};

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Track user's login state

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsLoggedIn(true);
  };


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={menuContainerStyle}>
      <Link to ='/'>
      <img src='/logo.svg' alt='logo' style={logoStyle} />
      </Link>
      <div>
        {isLoggedIn ? (
          <>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={buttonStyle}
            >
              My Account
            </Button>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleLogout}
              style={buttonStyle}
            >
              Logout
            </Button>
          </>
        ) : (
            <>  
          <Button
            id="demo-positioned-button"
            aria-controls={open ? 'demo-positioned-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={buttonStyle}
          >
            Sign In
          </Button>

        <Button
          id="demo-positioned-button-signup"
          aria-controls={open ? 'demo-positioned-menu-signup' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleLogin}
          style={{ ...buttonStyle, marginRight: '20px' }}
        >
          Sign Up
        </Button>
        </>
        )}
      </div>
    </div>
  );
}
