import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loss: {
    background: '#f44336',
  },
  win: {
    background: '#4caf50',
  },
});

const PersonCard = ({ personData, score, className }) => {
  const classes = useStyles();

  return (
    <>
      {personData && (
        <Card className={classes[className]}>
          <CardContent>
            <Typography color="textSecondary">
              Name:
              {personData.name}
            </Typography>
            <Typography variant="h4" component="h2">
              Mass:
              {personData.mass}
            </Typography>
            <Typography color="textSecondary">
              Height:
              {personData.height}
            </Typography>
            <Typography color="textSecondary">
              Birth year:
              {personData.birth_year}
            </Typography>
            <Typography color="textSecondary">
              Gender:
              {personData.gender}
            </Typography>
            {score && (
            <Typography color="textSecondary">
              Score:
              {score}
            </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </>

  );
};

export default PersonCard;
