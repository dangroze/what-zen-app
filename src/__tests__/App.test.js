
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import {render, fireEvent, waitForElement} from 'react-testing-library';
import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from '../components/Firebase/index';

import App from '../components/App/index';
import NewCardForm from '../components/NewCardForm';
import firebase from 'firebase';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  ReactDOM.render(<Firebase />);
  ReactDOM.unmountComponentAtNode()
//   expect(('Welcome to your board')).toBeInTheDocument  
//   expect(('Create task')).toBeInTheDocument
});


// it('renders welcome message', () => {
//   const wrapper = shallow(<Firebase />);
//   expect(wrapper.contains('What Zen')).toEqual(true);
// });