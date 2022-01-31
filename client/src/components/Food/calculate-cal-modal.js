import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { UserInfoConsumer } from '../../store/user-info-context';
import { useNavigate } from "react-router-dom";
import { UserHealthInfoConsumer } from '../../store/user-health-info-context';


function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function CalculateCalConfirmModal() {
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const activeRate = [1.3, 1.5, 1.6, 1.7, 2.4];
  const handleClick = (event, state, actions) => {
    event.preventDefault();
    let kcal;
    if (state.gender === 'male') {
      kcal = (10 * state.weight + 6.25 * state.height - 5 * state.age + 5) * activeRate[state.activity]
    } else {
      kcal = (10 * state.weight + 6.25 * state.height - 5 * state.age - 151) * activeRate[state.activity]
    }
    actions.setKcal(kcal);
    actions.setCarb(kcal * 0.125);
    actions.setProtein(kcal * 0.075);
    actions.setFat(kcal * 0.222);
    let salt;
    if (state.age <= 64) {
      salt = 1500;
    }
    else if (state.age <= 74) {
      salt = 1300;
    }
    else {
      salt = 1100;
    }
    actions.setSalt(salt);
    navigate('/select-trail-course');
  };

  const levels = ['활동량 거의 없음', '조금 활동함', '알맞게 활동함', '많이 활동함', '매우 많이 활동함']


  return (
    <UserHealthInfoConsumer>
      {({ actions }) => (
        <UserInfoConsumer>
          {({ state }) => (
            <>
              <Button
                type="submit"
                size="large"
                fullWidth
                variant="contained"
                sx={{ mt: 0.7, mb: 2 }}
                onClick={handleClickOpen}
              >
                산책로 보러가기
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
              >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                  {state.name}님의 정보가 올바릅니까?
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {/* {data.label === 'React' ? undefined : handleDelete(data)} */}
                    이름: {state.name}<br></br>
                    성별: {state.gender === "male" ? "남자" : "여자"}<br></br>
                    나이: {state.age}<br></br>
                    키: {state.height}<br></br>
                    몸무게: {state.weight}<br></br>
                    활동량: {levels[state.activity]}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>
                    아니오
                  </Button>
                  <Button autoFocus onClick={(event) => handleClick(event, state, actions)}>예</Button>
                </DialogActions>
              </Dialog>
            </>
          )}
        </UserInfoConsumer>
      )}
    </UserHealthInfoConsumer>
  );
}
