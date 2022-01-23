import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  Hidden
} from '@mui/material';
import CarouselSlide from './carousel-slide';
import { SLIDE_INFO } from './page-info';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


export default function IntroService00() {

  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };

  function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return <div onClick={clickFunction}>{icon}</div>;
  }

  return (
    <>
    <Grid container component="main00">
      <Box
        sx={{
          mx: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CarouselSlide content={content} />
        
        {/* <Arrow
          direction='right'
          clickFunction={() => onArrowClick('right')}
        /> */}
      </Box>
      </Grid>
    </>
  );
}
