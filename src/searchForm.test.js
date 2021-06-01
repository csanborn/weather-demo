import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import SearchForm from './searchForm';

const handleSubmit = jest.fn();
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
  render(<SearchForm onSubmit={handleSubmit} />);
  expect(screen.getByLabelText('City Name')).toBeInTheDocument();
});

test('Submits the form when the submit button is clicked', () => {
  render(<SearchForm onSubmit={handleSubmit} />)
  fireEvent.click(screen.getByText(/submit/i))
  // The form is submitted when the screen loads
  // and is submitted again here with this button click, hence
  // we expect submit to have been called twice
  expect(handleSubmit).toHaveBeenCalledTimes(2)
})