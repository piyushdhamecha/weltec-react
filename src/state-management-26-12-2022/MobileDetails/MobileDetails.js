import { Button } from '@mui/material';
import React from 'react';

const MobileDetails = ({ onButtonClick }) => {
  
  return (
    <div>
      <img src="/dummy.jpeg" alt="dummy" height="300px" />
      <div>
        <Button variant="contained" onClick={onButtonClick}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default MobileDetails;