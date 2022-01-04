import * as React from 'react';
import { styled } from '@material-ui/core'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});


export default function BasicButtons() {
  return (
    // <Stack spacing={2} direction="row">
    //   <Button variant="text">Text</Button>
    //   <Button variant="contained">Contained</Button>
    //   <Button variant="outlined">Outlined</Button>
    // </Stack>
    <MyButton>색상 안입혀져</MyButton>
  );
}
