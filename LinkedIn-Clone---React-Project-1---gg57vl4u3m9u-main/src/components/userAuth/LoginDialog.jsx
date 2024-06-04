import React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import "../../assets/styles/login.css";
import { useNavigate } from "react-router";

const LoginDialog = ({open, setOpen}) => {
  

  const navigate = useNavigate()
  const handleClick=()=>{
    navigate('/login')
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Dialog open={open} onClose={handleClose} BackdropProps={{ onClick: handleClose }}>
        {/* Add your dialog content here */}
        <div className="login-alert-dialog">
        <Alert severity="error">Please Sign In to Continue</Alert>
        <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "25px", width: "100%" }}
            onClick={handleClick}
          >Take me to the SignIn</Button>
        </div>

      </Dialog>
    </div>
  );
};

export default LoginDialog;
