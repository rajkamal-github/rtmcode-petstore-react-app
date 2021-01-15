import { React } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import Home from '../pages/home';
import NotFound from '../pages/notfound';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
                
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;