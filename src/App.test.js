import { render, screen } from '@testing-library/react';
import App from './App';

import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.useFakeTimers();
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  jest.useRealTimers();
});


test('renders search screen', () => {
  render(<App />);
  const textElement = screen.getByText(/City Name/i);
  expect(textElement).toBeInTheDocument();
});
