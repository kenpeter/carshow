/* eslint-disable no-console *//* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Test App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
