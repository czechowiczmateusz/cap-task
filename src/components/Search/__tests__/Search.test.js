import React from 'react';
import { render } from '@testing-library/react';
import Search from '../Search';
import 'regenerator-runtime/runtime';
import axios from 'axios';
import API from '../../../utils/API';
jest.mock('axios');

describe('<Search/>', () => {
    it('renders without crashing', () => {
        render(<Search/>)
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
        const response = await API.searchPeople('luke');
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
        const response = await API.searchStarships('luke');
        expect(response).toBeDefined;
    });
});