import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '0vh',
      }}
    >
      <CssBaseline />
      <Box
        component="header"
        sx={{
          py: 2,
          px: 1,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container >
          <Typography variant="body1">
            로고 들어가기
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}