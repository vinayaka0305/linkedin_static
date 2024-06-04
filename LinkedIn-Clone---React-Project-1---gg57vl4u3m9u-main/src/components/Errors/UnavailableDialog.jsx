import { Alert, Button, Dialog } from '@mui/material'
import React from 'react'

const UnavailableDialog = ({open,setOpen}) => {

    
   
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div>
        <Dialog open={open} onClose={handleClose} BackdropProps={{ onClick: handleClose }}>
        {/* Add your dialog content here */}
        <div className="unavailable-alert-dialog">
        <Alert severity="error">This feature is unavailabe.</Alert>
        <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "25px", width: "50%" }}
            onClick={handleClose}
          >ok</Button>
        </div>

      </Dialog>
    </div>
  )
}

export default UnavailableDialog