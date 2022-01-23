import React, { useState, useEffect, useRef, useCallback } from "react";
import { Grid, CssBaseline, Hidden, IconButton, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function HomePage() {
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
      {/* <Hidden smUp>
        <Grid
          xs={1}
          minWidth="4rem"
          backgroundColor="paleturquoise"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <IconButton onClick={() => setOpen(!open)}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <MenuIcon sx={{ width: '2rem', height: '2rem' }} />
            </Box>
          </IconButton>
        </Grid>
      </Hidden> */}
      
      <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={12}>
        <Header />
      </Grid>

      <Hidden smUp>
      <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={12}>
        <Header />
      </Grid>
      <Grid width="60vw" height={"100vh"} backgroundColor={"orange"} xs={12} sm>
        구역1
        </Grid>
      </Hidden>

      {/* {open && (
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
      )} */}
      {/* <Hidden smDown> */}
      <Hidden smDown>
        <Grid width="60vw" height={"calc(100vh - 8rem)"} backgroundColor={"orange"} xs={12} sm>
          구역1
        </Grid>
      </Hidden>
      {/* </Hidden> */}

      <Grid backgroundColor="tomato" width="40vw" height="calc(100vh - 8rem)" xs={12} sm>
        구역2
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

export default HomePage;

function MobileMenu() {
  return (
    <Grid
      container
      direction="column"
      xs={12}
      sx={{
        position: "absolute",
        top: 64,
        width: "60%",
        backgroundColor: "yellowgreen"
      }}
    >
      <Grid xs>
        <Button sx={{ width: "100%" }}>menu</Button>
      </Grid>
      <Grid xs>
        <Button sx={{ width: "100%" }}>menu</Button>
      </Grid>
      <Grid xs>
        <Button sx={{ width: "100%" }}>menu</Button>
      </Grid>
      <Grid xs>
        <Button sx={{ width: "100%" }}>menu</Button>
      </Grid>
      <Grid xs>
        <Button sx={{ width: "100%" }}>menu</Button>
      </Grid>
    </Grid>
  );
}