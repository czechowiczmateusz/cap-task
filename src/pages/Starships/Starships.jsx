import React from 'react';

import GameTemplate from '../../templates/GameTemplate/GameTemplate';

const Starships = () => {
  return (
    <GameTemplate getFunction="getStarships" attribute="crew" variant="starship"/>
  );
};

export default Starships;
