import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { UserHealthInfoConsumer } from '../../store/user-health-info-context';
import { UserInfoConsumer } from '../../store/user-info-context';

export default function OutlinedCard() {
  // const labels = ['탄수화물', '단백질', '지방', '나트륨']

  return (
    <UserInfoConsumer>
      {({ actions }) => (
        <UserHealthInfoConsumer>
          {({ state }) => (
            <Grid container alignItems="center">
                {/* {labels.map((value) => ( */}
                  <Grid item xs={3}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography component="h6">
                          '탄수화물'
                        </Typography>
                        <Typography variant="body2" component="p">
                          {state.carb} g  
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography component="h6">
                          '단백질'
                        </Typography>
                        <Typography variant="body2" component="p">
                          {state.protein} g  
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography component="h6">
                          '지방'
                        </Typography>
                        <Typography variant="body2" component="p">
                          {state.fat} g  
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={3}>
                    <Card variant="outlined">
                      <CardContent>
                        <Typography component="h6">
                          '나트륨'
                        </Typography>
                        <Typography variant="body2" component="p">
                          {state.salt} g  
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                {/* ))} */}
            </Grid>
          )}
        </UserHealthInfoConsumer>
      )}
    </UserInfoConsumer>
  );
}

{/* <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
  {['주소', '거리', '소요시간', '소모 칼로리', '구간'].map((value) => (
    <ListItem
      key={value}
      disableGutters
    >
      <ListItemText primary={`▸ ${value}`} />
    </ListItem>
  ))}
</List> */}