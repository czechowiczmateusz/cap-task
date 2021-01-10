import React from 'react';

import Box from '@material-ui/core/Box';

import Search from '../Search/Search';
import PersonCard from '../PersonCard/PersonCard';
import StarshipCard from '../StarshipCard/StarshipCard';

const CardBox = ({ data, score, result, setItem, variant }) => (
  <Box width="400px">
    {variant === 'person' && <PersonCard score={score} personData={data} className={result}/>}
    {variant === 'starship' && <StarshipCard score={score} starshipData={data} className={result}/>}
    <Search setItem={setItem} searchVariant={variant === 'person' ? 'searchPeople' : 'searchStarships'} searchLabel={variant === 'person' ? 'Search for person' : 'Search for starship'} />
  </Box>
);

export default CardBox;
