import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <Router>
                <Home></Home>
            </Router>
        );
    }
}

export default App;