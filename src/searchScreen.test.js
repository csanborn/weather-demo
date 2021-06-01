import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import SearchScreen from './searchScreen';

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

it('has the correct label text', () => {
  render(<SearchScreen />);
  expect(screen.getByLabelText('City Name')).toBeInTheDocument();
});

it('has a submit button', () => {
  render(<SearchScreen />);
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
});