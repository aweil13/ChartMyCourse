import React from 'react';
import ReactDom from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {login} from './actions/session_action';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    const store = configureStore();
    window.dispatch = store.dispatch
    window.getState = store.getState;
    window.login = login
    ReactDom.render(<Root store={store}/>, root);
})