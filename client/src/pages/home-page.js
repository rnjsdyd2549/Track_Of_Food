import React from 'react';
import IntroService from '../components/Landing/intorductory-service';
import {
  Paper,
  Box,
  Grid,
  CssBaseline,
  createTheme,
  ThemeProvider
} from '@mui/material';
import UserForm from '../components/Landing/user-form';
import IntroService00 from '../components/Landing/intro00';

const theme = createTheme();

const HomePage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          {/* <IntroService /> */}
          <IntroService00 />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <UserForm />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default HomePage
