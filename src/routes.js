import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';
import Single from './components/Single/Single';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path="view/:postId" component={Single}/>
    </Route>
);
