import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import NutritionCard from "./nutrition-card";
import { Card, CardContent } from "@material-ui/core";
import { UserHealthInfoConsumer } from "../../store/user-health-info-context";



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
        <>

            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom sx={{ fontSize: "1.3rem" }} component="div">
                        엘리스 정보
                    </Typography>
                </Grid>
                <Grid item>
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
            </Grid>
            
            <Grid container alignItems="center">

            <UserHealthInfoConsumer>
                {({state}) => (
                    <>
                    <Grid backgroundColor="pink" height='20vh' item xs={3}>
                    <Typography>전체칼로리</Typography>
                    <NutritionCard label='칼로리' value={state.kcal} unit='kcal' />

                </Grid>
                

            <Grid backgroundColor="lightblue"  height='20vh' justify="space-around" item xs={9}>
                <Typography align="start" sx={{fontSize: "1rem" }}>
                    1일 권장 영양소
                </Typography>
                <Grid container alignItems="center">
                    <Grid item xs={3}>
                        <NutritionCard label='탄수화물' value={state.carb} unit='g' />
                    </Grid>
                    <Grid item xs={3}>
                        <NutritionCard label='단백질' value={state.protein} unit='g' />
                    </Grid>
                    <Grid item xs={3}>
                        <NutritionCard label='지방' value={state.fat} unit='g' />
                    </Grid>
                    <Grid item xs={3}>
                        <NutritionCard label='나트륨' value={state.salt} unit='g' />
                    </Grid>
                </Grid>
                {/* <Grid container alignItems="center">
                    <Grid item xs={3}><OutlinedCard/></Grid>
                </Grid>   */}
            </Grid>
            </>
            )}
            </UserHealthInfoConsumer>
            </Grid>
        </>   
    );
}
