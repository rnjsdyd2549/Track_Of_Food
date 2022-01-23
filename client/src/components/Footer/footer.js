import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from './copyright';


export default function Footer() {
  return (
      <Box
        component="footer"
        sx={{
          width: '100%',
          height: '4rem',
          py: 3,
          align: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="false">
          <Copyright />
        </Container>
      </Box>
  );
}