import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import OutlinedCard from "./card";



const amount = [
    {
        value: 'day',
        label: '1일 섭취량'
    },
    {
        value: 'morning',
        label: '아침 섭취량'
    },
    {
        value: 'lunch',
        label: '점심 섭취량'
    },
    {
        value: 'dinner',
        label: '저녁 섭취량'
    }
]

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ShowCalories() {
    const [values, setValues] = useState({
        amount: '1일 섭취량'
    })

    return (
        <Box backgroundColor="lightgreen" sx={{ pt: 3, width: '100%', height: '40%' }}>
            <Grid container rowSpacing={1}>
                <Grid item alignItems={'center'} xs={12}>
                    <Typography align="start" sx={{fontSize: "1.3rem" }}>
                        엘리스 정보
                    </Typography>
                    <TextField
                        margin="dense"
                        required
                        size="small"
                        name="amount"
                        id="amount"
                        //onChange={handleChange}
                        onChange={
                            event => {
                                setValues({
                                    ...values,
                                    [event.target.name]: event.target.value
                                });
                                setValues(event.target.value);
                            }
                        }
                        select
                        SelectProps={{ native: true }}
                        value={values.amount}
                        variant="outlined"
                    >
                        {amount.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </TextField>

                </Grid>
                

                <Grid backgroundColor="pink" height='9vw' item xs={3}>
                    <Typography>전체칼로리</Typography>
                </Grid>
                <Grid backgroundColor="lightblue" justify="space-around" item xs={9}>
                    <Typography align="start" sx={{fontSize: "1rem" }}>
                        1일 권장 영양소
                    </Typography>
                    
                </Grid>
            </Grid>
        </Box>
    );
}
