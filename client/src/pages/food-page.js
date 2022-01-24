import React, { useState, useEffect, useRef, useCallback } from "react";
import { Grid, CssBaseline, Hidden, IconButton, Box, Button, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Search from "../components/Food/Search";
import ShowCalories from "../components/Food/show-calories";
import FoodList from "../components/Food/food-list";
import { Typography } from "@material-ui/core";
import FoodCart from "../components/Food/food-cart";
import SearchIcon from '@mui/icons-material/Search';

export default function FoodPage() {
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
      {/* 모바일용, 나중에 화면 변경되면 검색창 헤더 옆에 붙여버리기 */}
      <Hidden smUp>
      <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={9}>
        <Header />
      </Grid>

        <Grid
          xs={1}
          sm={3}
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
                alignItems: "center",
                position: 'fixed'
              }}
            >
              <SearchIcon sx={{ width: '2rem', height: '2rem' }} />
            </Box>
          </IconButton>
        </Grid>
        
        <Grid width="60vw" height={"100vh"} backgroundColor={"orange"} xs={12} sm>
        <ShowCalories />
        <FoodList />
        </Grid>
        
      </Hidden>

      {/* 여기 위는 모바일용 */}
      
      {/* <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={12}>
        <Header />
      </Grid> */}

      {/* 아이콘없이 모바일만 구기기 */}
      {/* <Hidden smUp>
      <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={12}>
        <Header />
      </Grid>
      <Grid width="60vw" height={"100vh"} backgroundColor={"orange"} xs={12} sm>
        <Search />
        <ShowCalories />
        <FoodList />
      </Grid>
      </Hidden> */}

      {/* {open && (
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
      )} */}
      {/* <Hidden smDown> */}
      {/* 구역1 */}

      <Hidden smDown>
      <Grid height={"4rem"} backgroundColor={"lightgray"} xs sm={12}>
        <Header />
      </Grid>
        <Grid height={"calc(100vh - 8rem)"} backgroundColor={"orange"} xs={12} sm>
          <Search />
          <ShowCalories />
          <FoodList />
        </Grid>
      </Hidden>
      {/* </Hidden> */}


      <Grid backgroundColor="tomato" height="calc(100vh - 8rem)" xs={12} sm>
        <FoodCart />
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

// import {
//   Paper,
//   Box,
//   Grid,
//   CssBaseline,
//   createTheme,
//   ThemeProvider,
//   Button
// } from '@mui/material';
// import FoodCart from "../components/Food/food-cart";

// const FoodPage = () => {

//   const theme = createTheme();

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Header />
//         <Grid container component="main" sx={{ height: '100vh' }}>
//           <CssBaseline />

//           <FoodCart />
//         </Grid>
//         <Button>제출</Button>
//         <Footer />
//       </ThemeProvider>
//     </>
//   )
// >>>>>>> 5b2ef49c9d92a7befbcd40a31f18d8bfd2bec8c9
// }

// export default HomePage;

// function MobileMenu() {
//   return (
//     <Grid
//       container
//       direction="column"
//       xs={12}
//       sx={{
//         position: "absolute",
//         top: 64,
//         width: "60%",
//         backgroundColor: "yellowgreen"
//       }}
//     >
//       <Grid xs>
//         <Button sx={{ width: "100%" }}>menu</Button>
//       </Grid>
//       <Grid xs>
//         <Button sx={{ width: "100%" }}>menu</Button>
//       </Grid>
//       <Grid xs>
//         <Button sx={{ width: "100%" }}>menu</Button>
//       </Grid>
//       <Grid xs>
//         <Button sx={{ width: "100%" }}>menu</Button>
//       </Grid>
//       <Grid xs>
//         <Button sx={{ width: "100%" }}>menu</Button>
//       </Grid>
//     </Grid>
//   );
// }