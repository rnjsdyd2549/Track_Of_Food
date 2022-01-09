import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Grid, ListItem, Paper, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Foods from '../components/Food/searching-food';
import UserForm from '../components/Landing/user-form';

const TrailPage = () => {

    const [tracks, setTracks] = useState([]); // api에서 가져올 음식 데이터

    const searchTracks = async () => {
        const res = await axios.get(`/api/track?walk_dist=1.2&jog_dist=1.2&need_more_workout=0&user_lng=126.9997043&user_lat=37.58217`);
        setTracks(res.data['walk_list']);
    };

    useEffect(() => {
        searchTracks();
    }, []);
    const theme = createTheme();

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
                        <Typography align="center" sx={{ pb: 1 }} component="h1" variant="h3">
                            추천트랙
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
                            {tracks.map((track) => {
                                return (
                                    <>
                                        <h3>{track.name}</h3>
                                        <h3>{track.address}</h3>
                                    </>

                                );
                            })}
                        </Paper>
                    </Box>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default TrailPage