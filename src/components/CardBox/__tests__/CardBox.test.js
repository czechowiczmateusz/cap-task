import React from 'react';
import { render } from '@testing-library/react';
import CardBox from '../CardBox';

describe('<CardBox/>', () => {
    it('renders without crashing', () => {
        render(<CardBox/>)
    });
    it('props work', () => {
        const person = {
            name: 'Luke Skywalker',
            mass: 77,
            height: 172,
            birth_year: '19BBY',
            gender: 'male'
        };
        const win = 'win';
        const score = 5;
        const display = render(<CardBox variant="person" data={person} score={score} result={win} />);
        display.getByText(new RegExp(`Name:${person.name}`, 'i'));
        display.getByText(new RegExp(`Mass:${person.mass}`, 'i'));
        display.getByText(new RegExp(`Height:${person.height}`, 'i'));
        display.getByText(new RegExp(`Birth year:${person.birth_year}`, 'i'));
        display.getByText(new RegExp(`Gender:${person.gender}`, 'i'));
        display.getByText(new RegExp(`Score:${score}`, 'i'));
    });
    it('props work', () => {
        const starship = {
            name: 'Death Star',
            crew: '342,953',
            model: 'DS-1 Orbital Battle Station',
            MGLT: '10',
            length: '120000'
        };
        const loss = 'loss';
        const score = 2;
        const display = render(<CardBox variant="starship" data={starship} score={score} result={loss} />);
        display.getByText(new RegExp(`Name:${starship.name}`, 'i'));
        display.getByText(new RegExp(`Crew:${starship.crew}`, 'i'));
        display.getByText(new RegExp(`Model:${starship.model}`, 'i'));
        display.getByText(new RegExp(`MGLT:${starship.MGLT}`, 'i'));
        display.getByText(new RegExp(`Length:${starship.length}`, 'i'));
        display.getByText(new RegExp(`Score:${score}`, 'i'));
    });
})