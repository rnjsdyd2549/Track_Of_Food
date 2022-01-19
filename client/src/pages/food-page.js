// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from "react";
import Header from "../components/Header/header";
import { UserInfoConsumer } from "../store/user-info-context";
import Footer from "../components/Footer/footer";
import {
  Paper,
  Box,
  Grid,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Button
} from '@mui/material';
import FoodCart from "../components/Food/food-cart";

const FoodPage = () => {

  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />

          <FoodCart />
        </Grid>
        <Button>제출</Button>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default FoodPage
