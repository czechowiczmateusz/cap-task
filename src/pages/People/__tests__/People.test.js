import React from 'react';
import { render } from '@testing-library/react';
import People from '../People';
import 'regenerator-runtime/runtime';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<People/>', () => {
    it('renders without crashing', () => {
        render(<Router><People/></Router>)
    });
});