import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoConsumer } from "../../store/user-info-context";
import UserInfoConfirmModal from "./user-info-modal";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';

import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Copyright from '../Footer/copyright';


const theme = createTheme();

const gender = [
  {
    value: 'male',
    label: '남자'
  },
  {
    value: 'female',
    label: '여자'
  }
]

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

const UserForm = () => {
  
  let navigate = useNavigate();

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
    // const data = new FormData(event.currentTarget);
  };

  const onClick = (event) => {
    event.preventDefault();
    navigate('/select-food');
  }


  return (
   <>
    <UserInfoConsumer>
    {({ state, actions }) =>
        (
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
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                  <PersonRoundedIcon />
                </Avatar>

                <Typography align="center" sx={{pb : 1}} component="h1" variant="h4">
                  정보 입력
                </Typography>
                <Typography align="center" component="h4" variant="subtitle1">
                  검사를 위한 필수 정보들을 입력해주세요.
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
                    autoFocus
                    onChange={({target: { value }}) => actions.setName(value)}
                  />
                  
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="gender"
                    label="성별"
                    id="gender"
                    //onChange={handleChange}
                    onChange = {
                      event => {
                        setValues({
                          ...values,
                          [event.target.name]: event.target.value
                        });
                        actions.setGender(event.target.value);
                      }  
                    }
                    select
                    SelectProps={{ native: true }}
                    value={values.gender}
                    variant="outlined"
                  >
                    {gender.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                </TextField>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="age"
                    label="나이"
                    type="number"
                    id="age"
                    autoComplete="number"
                    onChange={({target: { value }}) => actions.setAge(value)}
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
                    onChange={({target: { value }}) => actions.setHeight(value)}
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
                    onChange={({target: { value }}) => actions.setWeight(value)}
                  />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="activityLevel"
                  label="평소 활동량"
                  id="activityLevel"
                  //onChange={handleChange}
                  onChange = {
                    event => {
                      setValues({
                        ...values,
                        [event.target.name]: event.target.value
                      });
                      actions.setActivity(event.target.value);
                    }  
                  }
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
                <UserInfoConfirmModal />
                <Copyright sx={{ mt: 5 }} />
                </Box>
                </Box>
              </Grid>

              {/* <h3>이름 : {state.name}</h3>
              <h3>성별 : {state.gender}</h3>
              <h3>나이 : {state.age}</h3>
              <h3>키 : {state.height}</h3>
              <h3>몸무게 : {state.weight}</h3>
              <h3>활동량 : {state.activity}</h3> */}

            </ThemeProvider>
          </>
        )
      }
    </UserInfoConsumer>
   </>
  )
}

export default UserForm;
