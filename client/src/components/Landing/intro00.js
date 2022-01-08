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
    ThemeProvider
} from '@mui/material';
import Header from '../Header/header'
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
        <Grid item xs={false} sm={4} md={7}>
        <Header />
            <CssBaseline />
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                  }}
                >
               
                <Typography align="center" sx={{pb : 2}} component="h1" variant="h4">
                  집콕으로 집 나간 건강찾기!
                </Typography>
                <Typography align="center" component="h4" variant="subtitle1">
                  우리 서비스 ㅇㅇㅇ은 코로나 이후 배달 음식 섭취 증가로 인한 저하된 체력과 면역력을 증진시키기 위한 집 주변 산책로 추천 서비스입니다.
                </Typography>

                <Box 
                  component="form" 
                  noValidate 
                  sx={{ 
                    mt: 1,
                    width: '50%',
                    height: '50%',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <img src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/graph-wiki_ver_1.png" />
                </Box>
                <CarouselSlide content={content} />
                <Arrow 
                  direction = 'right'
                  clickFunction={() => onArrowClick('right')}
                />
              </Box>
        </Grid>
        </>
    );
}