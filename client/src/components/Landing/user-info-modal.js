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

export default function UserInfoConfirmModal() {
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
    navigate('/select-food');
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
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClickOpen}
              >
                음식 고르러가기
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


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <Button 
//         type="submit"
//         size="large"
//         fullWidth
//         variant="contained"
//         sx={{ mt: 3, mb:2 }}
//         onClick={handleOpen}
//         >
//             음식 고르러가기
//         </Button>

//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </>
//   );
// }
