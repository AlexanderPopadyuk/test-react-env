import * as React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('<App /> renders', () => {
  const { getByText } = render(<App />);
  const element = getByText(/React APP  test/i);

  expect(element).toBeInTheDocument();
});
