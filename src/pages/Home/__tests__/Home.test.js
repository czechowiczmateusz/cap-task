import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';
import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Home/>', () => {
    it('renders without crashing', () => {
        render(<Router><Home/></Router>);
    });
    it('renders people link', () => {
        const { getByText } = render(<Router><Home/></Router>);
        const peopleButton = getByText(/People/i);
        expect(peopleButton).toBeInTheDocument();
        expect(peopleButton.closest('a')).toHaveAttribute('href', '/people');
    });
    it('renders starships link', () => {
        const { getByText } = render(<Router><Home/></Router>);
        const starshipsButton = getByText(/Starships/i);
        expect(starshipsButton).toBeInTheDocument();
        expect(starshipsButton.closest('a')).toHaveAttribute('href', '/starships');
    });
});