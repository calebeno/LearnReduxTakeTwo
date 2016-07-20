'use strict';

import React from 'react';
import { render } from 'react-dom';

// import css
import './index.css';

// import components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import Single from './components/Single/Single';

// import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}/>
            <Route path="view/:postId" component={Single}/>
        </Route>
    </Router>
);

render(router, document.getElementById('app'));
