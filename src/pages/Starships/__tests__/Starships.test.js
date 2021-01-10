import React from 'react';
import { render } from '@testing-library/react';
import Starships from '../Starships';
import 'regenerator-runtime/runtime';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Starships/>', () => {
    it('renders without crashing', () => {
        render(<Router><Starships/></Router>)
    });
});