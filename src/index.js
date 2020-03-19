import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';
import { carReducer } from './reducers/carReducer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

let store = createStore(carReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Router><Provider><App /></Provider></Router>, rootElement);
