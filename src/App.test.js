import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import CalculateSquareRoot from './pages/calculate-square';

test('renders calculate square component', () => {
  const div = document.createElement("div");
  render(<CalculateSquareRoot/>, div);
});

