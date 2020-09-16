import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" component={SignUp} />
        </Switch>
    )
}

export default Routes;
