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
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Copyright from '../Footer/copyright';

const activity = [
    {
      value: 'act-level0',
      label: '활동량 거의 없음'
    },
    {
      value: 'act-level1',
      label: '조금 활동함'
    },
    {
      value: 'act-level2',
      label: '알맞게 활동함'
    },
    {
      value: 'act-level3',
      label: '많이 활동함'
    },
    {
      value: 'act-level4',
      label: '매우 많이 활동함'
    }
  ];

const theme = createTheme();

export default function SignInSide() {
  const [values, setValues] = useState({
      name: ' ',
      gender: ' ',
      age: 0,
      height: 0,
      weight: 0,
      activityLevel: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PersonRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              정보 입력
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="이름"
                name="name"
                autoComplete="text"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="age"
                label="나이"
                type="number"
                id="age"
                autoComplete="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="height"
                label="키"
                type="number"
                id="height"
                autoComplete="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="weight"
                label="몸무게"
                type="number"
                id="weight"
                autoComplete="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="activityLevel"
                label="평소 활동량"
                id="activityLevel"
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={values.activityLevel}
                variant="outlined"
              >
                {activity.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                음식 고르러가기
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}