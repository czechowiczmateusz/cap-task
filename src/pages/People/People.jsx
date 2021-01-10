import React from 'react';

import GameTemplate from '../../templates/GameTemplate/GameTemplate';

const People = () => {
  return (
    <GameTemplate getFunction="getPeople" attribute="mass" variant="person"/>
  );
};

export default People;
