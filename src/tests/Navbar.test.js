import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/configureStore';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
