import React, { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import "../../../assets/styles/profileMenu.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
    const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userName = sessionStorage.getItem("userName");
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
  

  const handleLogOut =()=>{
    sessionStorage.removeItem('authToken')
    sessionStorage.removeItem('userName')
    sessionStorage.setItem("loginStatus", JSON.stringify(false));
    navigate('/login')
  }

 

  return (
    <>
      <section id="profileIcon" onClick={handleClick}>
        <AccountCircleRoundedIcon style={{ fontSize: "28px" }} />
        <span>Me<ArrowDropDownIcon style={{margin:'0 0 0 -1px'}}/></span>
      </section>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {!isLoggedIn ? (
          <>
            <MenuItem onClick={()=>navigate('/login')}>Login</MenuItem>
            <MenuItem onClick={()=>navigate('/signup')}>Sign Up</MenuItem>
          </>
        ) : (
          <>
            <MenuItem  className='customMenuItem'>
              <div className="profilemenu-avatar-heading">
                <Avatar style={{ width: "60px", height: "60px" }} />
                <div className="profilemenu-avatar-heading-user">
                  <span id="profilemenu-username">{userName}</span>
                  <span id="profilemenu-job">Software Devloper</span>
                </div>
              </div>
            </MenuItem>
            <MenuItem>
              <Button
                variant="outlined"
                size="small"
                sx={{ borderRadius: "25px", width: "100%", height: "25px" }}
                onClick={()=>{handleClose();navigate('/profile')}}
              >
                Profile
              </Button>
            </MenuItem>

            <Divider />
            <Typography variant="subtitle1">Accounts</Typography>
            <MenuItem onClick={()=>{handleClose();navigate('/premium')}} >Try premium for free.</MenuItem>
            <MenuItem onClick={()=>{handleClose();navigate('/unavailable')}}>Settings & Privacy</MenuItem>

            <Divider />
            <Typography variant="subtitle1">Manage</Typography>
            <MenuItem onClick={()=>{handleClose();navigate('/unavailable')}}>Post & Activityt</MenuItem>
            <MenuItem onClick={()=>{handleClose();navigate('/unavailable')}}>Job Posting Accoun</MenuItem>
            <Divider/>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};

export default ProfileMenu;
