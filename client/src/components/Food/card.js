import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function OutlinedCard() {

  return (
    <Card sx={{ minWidth: '80' }} variant="outlined">
      <CardContent>
        <Typography component="h6">
          탄수화물
        </Typography>
        <Typography variant="body2" component="p">
          well meaning
        </Typography>
      </CardContent>
    </Card>
  );
}
