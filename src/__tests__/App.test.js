
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import {render, fireEvent, waitForElement} from 'react-testing-library';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/index';
import NewCardForm from '../components/NewCardForm';
import firebase from 'firebase';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
//   expect(('Welcome to your board')).toBeInTheDocument  
//   expect(('Create task')).toBeInTheDocument
});


it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains('What Zen')).toEqual(true);
});