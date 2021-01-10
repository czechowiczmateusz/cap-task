import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
import StarIcon from '@material-ui/icons/Star';

const Home = () => (
  <Box display="flex" justifyContent="space-around" alignItems="center" height="100vh">
    <Button component={Link} to="/people" variant="contained" color="primary" size="large" startIcon={<PeopleIcon />}>People</Button>
    <Button component={Link} to="/starships" variant="contained" color="secondary" size="large" startIcon={<StarIcon />}>Starships</Button>
  </Box>
);

export default Home;
