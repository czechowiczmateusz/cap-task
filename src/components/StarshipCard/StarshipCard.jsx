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

const StarshipCard = ({ starshipData, score, className }) => {
  const classes = useStyles();

  return (
    <>
      {starshipData && (
        <Card className={classes[className]}>
          <CardContent>
            <Typography color="textSecondary">
              Name:
              {starshipData.name}
            </Typography>
            <Typography variant="h4" component="h2">
              Crew:
              {starshipData.crew}
            </Typography>
            <Typography color="textSecondary">
              Model:
              {starshipData.model}
            </Typography>
            <Typography color="textSecondary">
              MGLT:
              {starshipData.MGLT}
            </Typography>
            <Typography color="textSecondary">
              Length:
              {starshipData.length}
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

export default StarshipCard;
