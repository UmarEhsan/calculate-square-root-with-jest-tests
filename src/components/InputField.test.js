import React from 'react';
import { render } from '@testing-library/react';
import InputField from '../components/InputField';
import TestRenderer  from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

configure({adapter: new Adapter()});

it("renders without crashing", () => {
    const div = document.createElement("div");
    render(<InputField></InputField>, div)
});

it("should call onChange prop", () => {
    const mockFn = jest.fn();
        const event = {
            preventDefault() {},
      target: { value: 1000 }
    };
    const input =  shallow(<InputField handleChange={mockFn}/>);
    input.find('input').simulate('change', event);
    expect(mockFn).toHaveBeenCalledWith(1000);
});