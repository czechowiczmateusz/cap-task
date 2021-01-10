import React from 'react';
import { render } from '@testing-library/react';
import StarshipCard from '../StarshipCard';

describe('<StarshipCard/>', () => {
    it('renders without crashing', () => {
        render(<StarshipCard/>)
    });
    const starship = {
        name: 'Death Star',
        crew: '342,953',
        model: 'DS-1 Orbital Battle Station',
        MGLT: '10',
        length: '120000'
    };
    it('props work', () => {
        const win = 'win';
        const score = 3;
        const display = render(<StarshipCard starshipData={starship} score={score} className={win} />);
        display.getByText(new RegExp(`Name:${starship.name}`, 'i'));
        display.getByText(new RegExp(`Crew:${starship.crew}`, 'i'));
        display.getByText(new RegExp(`Model:${starship.model}`, 'i'));
        display.getByText(new RegExp(`MGLT:${starship.MGLT}`, 'i'));
        display.getByText(new RegExp(`Length:${starship.length}`, 'i'));
        display.getByText(new RegExp(`Score:${score}`, 'i'));
    });
    it('props work', () => {
        const loss = 'loss';
        const score = 1;
        const display = render(<StarshipCard starshipData={starship} score={score} className={loss} />);
        display.getByText(new RegExp(`Name:${starship.name}`, 'i'));
        display.getByText(new RegExp(`Crew:${starship.crew}`, 'i'));
        display.getByText(new RegExp(`Model:${starship.model}`, 'i'));
        display.getByText(new RegExp(`MGLT:${starship.MGLT}`, 'i'));
        display.getByText(new RegExp(`Length:${starship.length}`, 'i'));
        display.getByText(new RegExp(`Score:${score}`, 'i'));
    });
})