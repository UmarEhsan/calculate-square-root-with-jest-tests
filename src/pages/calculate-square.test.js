import React from 'react';
import { render } from '@testing-library/react';
import CalculateSquareRoot from '../pages/calculate-square';
import InputField from '../components/InputField';
import TestRenderer  from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import calulateSquare from '../constants/calculateSquareApi';
import axios from 'axios';

configure({adapter: new Adapter()});

it('render correctly text component', () => {  
    const TextInputComponent = TestRenderer.create(<InputField />).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});


it('check the input value to be 0 at the start', () => {
    const wrapper = mount(<CalculateSquareRoot />)
    expect(wrapper.find('input[type="number"]').prop('value')).toEqual(String(0));
});

it(`sould test the api call`, async () => {
        jest.setTimeout(10000);
        const result = await calulateSquare(16);
        expect(result.title).toBe(4);
    });
