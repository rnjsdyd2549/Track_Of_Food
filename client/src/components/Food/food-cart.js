import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Box,
    Grid,
    Typography,
    createTheme,
    ThemeProvider,
    Stack, 
    Divider,
    Chip,
    Paper,
    ListItem
  } from '@mui/material';
  import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';

const theme = createTheme();

const FoodCart = () => {
    let navigate = useNavigate();

    const [chipData, setChipData] = React.useState([
        { key: 0, label: '치킨' },
        { key: 1, label: '햄버거' },
        { key: 2, label: '떡볶이' },
        { key: 3, label: '피자' },
        { key: 4, label: '초밥' },
      ]);


    const [amount, setAmount] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
      };

    const onClick = (event) => {
        event.preventDefault();
        navigate('/select-trail-course');
    }

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };


    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                        <Typography align="center" sx={{pb : 1}} component="h1" variant="h3">
                            담은 음식들
                        </Typography>

                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                p: 0.5,
                                m: 0,
                                alignItems: 'center'
                            }}
                            component="ul"
                            >
                            {chipData.map((data) => {
                                return (
                                <ListItem key={data.key} sx={{alignItems: 'center'}}>
                                    <Chip
                                        icon={<DeliveryDiningRoundedIcon />}
                                        label={data.label}
                                        onDelete={handleDelete(data)}
                                        sx={{
                                            width: 1,
                                            alignItems: 'center'
                                        }}
                                    >
                                        
                                    </Chip>
                                </ListItem>
                                );
                            })}
                            </Paper>

                    </Box>
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default FoodCart;