import React from 'react';
import { 
    Box,
    Card,
    makeStyles,
    Typography,
} from '@material-ui/core';

export default function CarouselSlide(props) {
    const { title, subTitle, contents } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '100%',
            //boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));

    const classes = useStyles();

    return (
        <Card 
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Typography align="center" sx={{pb : 2}} component="h1" variant="h4">
                {title}
            </Typography>
            <Typography align="center" component="h4" variant="subtitle1">
                {subTitle}
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
        </Card>
    );
}
