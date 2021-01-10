import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import 'regenerator-runtime/runtime';

describe('<App/>', () => {
    it('renders without crashing', () => {
        render(<App/>)
    });
});