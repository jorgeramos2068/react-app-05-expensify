import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
const store = configureStore();
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
