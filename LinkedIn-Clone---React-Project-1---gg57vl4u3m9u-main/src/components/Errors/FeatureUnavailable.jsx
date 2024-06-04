import React from 'react'
import WarningIcon from '@mui/icons-material/Warning';

const FeatureUnavailable = () => {
  return (
    <div className='feature-unavailable' >
        <WarningIcon style={{fontSize:'15rem'}} />
        <p>This feature is not available at the moment.</p>
    </div>
  )
}

export default FeatureUnavailable