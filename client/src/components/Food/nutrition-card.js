import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function NutritionCard({label, value, unit}) {
  return (

      <Card variant="outlined">
        <CardContent>
          <Typography component="h6">
            {label}
          </Typography>
          <Typography component="h6">
            {value} {unit}
          </Typography>
        </CardContent>
      </Card>

  );
}