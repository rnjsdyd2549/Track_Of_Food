import React, { useState, useEffect, useRef, useCallback } from "react";
import { Grid, CssBaseline, Hidden, IconButton, Box, Button, Container } from "@mui/material";
import UserForm from '../components/Landing/user-form';
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import IntroService00 from "../components/Landing/intro00";
import BasicTabs from "../components/Trail/select-trail";
import TrailDetail from "../components/Trail/trail-detail";

function TrailPage() {
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowResize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    windowSize >= 600 && setOpen(false);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <Grid container height="100vh" width="100%">
      <CssBaseline />
      <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={12}>
        <Header />
      </Grid>

      <Hidden smUp>
      <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={12}>
        <Header />
      </Grid>
      <Grid width="60vw" height={"100vh"} backgroundColor={"orange"} xs={12} sm>
        <BasicTabs />
      </Grid>
      </Hidden>
      
      {/* {open && (
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
      )} */}
      <Hidden smDown>
        <Grid width="60vw" height={"calc(100vh - 8rem)"} backgroundColor={"orange"} xs={12} sm>
        <BasicTabs />
        </Grid>
      </Hidden>

      <Grid backgroundColor="tomato" width="40vw" height="calc(100vh - 8rem)" xs={12} sm>
        <Container sx={{ margin: '5% auto' }}>
          <TrailDetail />
        </Container> 
      </Grid>
      <Grid
        xs
        sm={12}
        height="4rem"
        backgroundColor="lightgray"
      >
       <Footer />
      </Grid>
    </Grid>
  );
}

export default TrailPage;
