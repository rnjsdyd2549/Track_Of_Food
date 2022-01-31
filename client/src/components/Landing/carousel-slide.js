import { Box, Button, Card, Grid } from "@mui/material";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item";


// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 1},
//   { width: 768, itemsToShow: 1 },
//   { width: 1200, itemsToShow: 1 }
// ];

export default function CarouselSlide() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <Box sx={{mx:1, my:7, width:'100%'}}>
        <Carousel 
            itemsToShow={1}
            showArrows={false}
            enableAutoPlay={true}
            autoPlaySpeed={7000}
            // breakPoints={breakPoints}
        >
          {items.map((item) => (
            // <Item key={item}>{item}</Item>
            <Card sx={{width: '100%', height:'62vh'}}>{item}</Card>
          ))}

        </Carousel>
      </Box>
    </>
  );
}




// import React from 'react';
// import { 
//     Box,
//     Card,
//     CardContent,
//     CardMedia,
//     makeStyles,
//     Typography,
//     Paper
// } from '@material-ui/core';

// export default function CarouselSlide(props) {
//     const { title, subTitle, contents } = props.content;

//     return (
//         <Box
//         sx={{
//           my: 4,
//           mx: 2,
//           height: '73%' ,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Card 
//             sx={{
//                 my: 2,
//                 mx: 0,
//                 width: '100%',
//                 height: '100%',
//                 display: 'flex',
//                 objectFit: 'cover',
//                 flexDirection: 'row',
//                 alignItems: 'center'
//             }}>
//             <CardContent>
//                 <Typography align="center" sx={{mb: 2}} component="h1" variant="h4">
//                     {title}
//                 </Typography>
//                 <Typography align="center" component="h4" variant="subtitle1">
//                     {subTitle}
//                 </Typography>
//             </CardContent>

//             <CardMedia
//                 style={{
//                     width: '100%',
//                     maxHeight: '500px',
//                     objectFit: 'cover'
//                 }}
//                 component='img'
//                 image='https://myanimals.co.kr/wp-content/uploads/2019/08/%EB%B0%94%EC%9C%84%EB%84%88%EA%B5%AC%EB%A6%AC.jpg'
//             />      
//         </Card>
//         </Box>
//     );
// }
