import React from 'react';
import { render } from '@testing-library/react';
import PersonCard from '../PersonCard';

describe('<PersonCard/>', () => {
    it('renders without crashing', () => {
        render(<PersonCard/>)
    });
    const person = {
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        birth_year: '19BBY',
        gender: 'male'
    };
    it('props work', () => {
        const win = 'win';
        const score = 3;
        const display = render(<PersonCard personData={person} score={score} className={win} />);
        display.getByText(new RegExp(`Name:${person.name}`, 'i'));
        display.getByText(new RegExp(`Mass:${person.mass}`, 'i'));
        display.getByText(new RegExp(`Height:${person.height}`, 'i'));
        display.getByText(new RegExp(`Birth year:${person.birth_year}`, 'i'));
        display.getByText(new RegExp(`Gender:${person.gender}`, 'i'));
        display.getByText(new RegExp(`Score:${score}`, 'i'));
    });
    it('props work', () => {
        const loss = 'loss';
        const score = 1;
        const display = render(<PersonCard personData={person} score={score} className={loss} />);
        display.getByText(new RegExp(`Name:${person.name}`, 'i'));
        display.getByText(new RegExp(`Mass:${person.mass}`, 'i'));
        display.getByText(new RegExp(`Height:${person.height}`, 'i'));
        display.getByText(new RegExp(`Birth year:${person.birth_year}`, 'i'));
        display.getByText(new RegExp(`Gender:${person.gender}`, 'i'));
        display.getByText(new RegExp(`Score:${score}`, 'i'));
    });
})