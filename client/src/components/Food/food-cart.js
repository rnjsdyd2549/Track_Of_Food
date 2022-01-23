import React, { useState, useEffect } from "react";
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
import axios from "axios";
import useDebounce from "./debounce";

const theme = createTheme();

const FoodCart = () => {
    const [foods, setFoods] = useState([]); // api에서 가져올 음식 데이터
    const [searchTerm, setSearchTerm] = useState(""); // 검색 키워드
    const debouncedSearchTerm = useDebounce(searchTerm, 800);

    const searchFoods = async (search) => {
        const res = await axios.get(`/api/food?food_name=${search}`);
        setFoods(res.data['food_list']);
    };

    useEffect(() => {
        searchFoods(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    let navigate = useNavigate();

    const [chipData, setChipData] = React.useState([]);

    const [amount, setAmount] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/select-trail-course');
    };

    const handleClick = (food) => {
        setChipData(prev => [...prev, { key: food.id, label: food.name }])
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
                        <Typography align="center" sx={{ pb: 1 }} component="h1" variant="h3">
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
                                    <ListItem key={data.key} sx={{ alignItems: 'center' }}>
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
                        <TextField value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
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
                            {foods.map((food) => {
                                return (
                                    <ListItem key={food.id} sx={{ alignItems: 'center' }}>
                                        <Chip
                                            icon={<DeliveryDiningRoundedIcon />}
                                            label={food.name}
                                            sx={{
                                                width: 1,
                                                alignItems: 'center'
                                            }}
                                        >
                                        </Chip>
                                        <Button onClick={() => handleClick(food)}>담기</Button>
                                    </ListItem>
                                );
                            })}
                        </Paper>

                        <Button onClick={handleSubmit}>산책로 보러가기</Button>
                    </Box>
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default FoodCart;