import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
        </Router>
    );
};

export default App;
