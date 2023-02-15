import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
