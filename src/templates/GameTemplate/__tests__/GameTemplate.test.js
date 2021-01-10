import React from 'react';
import { render } from '@testing-library/react';
import GameTemplate from '../GameTemplate';
import 'regenerator-runtime/runtime';
import axios from 'axios';
import API from '../../../utils/API';
jest.mock('axios');

describe('<GameTemplate/>', () => {
    it('renders without crashing', () => {
        render(<GameTemplate/>)
    });
    it('people props work', () => {
        render(<GameTemplate  getFunction="getPeople" attribute="mass" variant="person" />);
    });
    it('starships props work', () => {
        render(<GameTemplate getFunction="getStarships" attribute="crew" variant="starship"/>);
    });
    it('returns people list', async () => {
        axios.get.mockResolvedValue({
            data: {
                results: [
                    {
                        name: 'Luke Skywalker',
                        mass: 77,
                        height: 172,
                        birth_year: '19BBY',
                        gender: 'male'
                    },
                    {
                        name: 'Luke Skywalker',
                        mass: 77,
                        height: 172,
                        birth_year: '19BBY',
                        gender: 'male'
                    }
                ],
                count: 2
            }
        })
        const response = await API.getPeople(1);
        expect(response).toBeDefined;
    });
    it('returns starships list', async () => {
        axios.get.mockResolvedValue({
            data: {
                results: [
                    {
                        name: 'Death Star',
                        crew: '342,953',
                        model: 'DS-1 Orbital Battle Station',
                        MGLT: '10',
                        length: '120000'
                    },
                    {
                        name: 'Death Star',
                        crew: '342,953',
                        model: 'DS-1 Orbital Battle Station',
                        MGLT: '10',
                        length: '120000'
                    }
                ],
                count: 2
            }
        })
        const response = await API.getStarships(2);
        expect(response).toBeDefined;
    });
});