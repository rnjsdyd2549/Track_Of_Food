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

  const onClick = (event) => {
    event.preventDefault();
    navigate('/select-food');
  };


  return (
    
    <UserInfoConsumer>
      {({state}) => (
          <>
          <Button
            type="submit"
            size="large"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb:2 }}
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
                이름 {state.name}
                성별 `${state.gender} === male ? 남자 : 여자`
                나이 {state.age}
                키 {state.height}
                몸무게 {state.weight}
                활동량 {state.activity}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>
                아니오
            </Button>
            <Button autoFocus onClick={onClick}>예</Button>
            </DialogActions>
        </Dialog>
        </>
      )}
      </UserInfoConsumer>
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
