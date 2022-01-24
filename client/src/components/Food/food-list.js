import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/material";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import OutlinedCard from "./card";

export default function FoodList() {
    return(
        <Grid sx={{mt: 1}}>
        <Box backgroundColor="purple" sx={{ pt: 2, height: '50%'}}>
            음식 리스트
        </Box>
        </Grid>
    );
}