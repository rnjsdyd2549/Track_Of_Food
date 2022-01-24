import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Grid } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import useDebounce from './debounce';

export default function Search() {
  return (
    <Grid container justifyContent="flex-end" sx={{px:1, py:1}}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="배달 음식 찾기"
          inputProps={{ 'aria-label': 'searching-foods' }}
          onChange = {<useDebounce/>}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
}
