import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={SignIn} />
			<Route path="/register" exact component={SignUp} />

			<Route path="/dashboard" exact component={Dashboard} />
			<Route path="/profile" exact component={Profile} />
		</Switch>
	);
};

export default Routes;
