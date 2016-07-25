/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';

// store configuration
import configureStore from './store/configureStore';

// import css
import './index.css';

// import react router
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import { Provider } from 'react-redux';

// import initial state
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,
    comments
};

const store = configureStore(defaultState);
const history = syncHistoryWithStore(browserHistory, store);

const router = (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);

render(router, document.getElementById('app'));
