import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
      <Typography variant="body1" color="text.secondary" variant="caption" >
        {'Copyright © '}
        <Link color="inherit">
          건강찾기 뚜벅뚜벅
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  