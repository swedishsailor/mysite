import React from 'react';
import PageNav from '../PageNav/PageNav';
import Home from '../Home/Home';
import { HashRouter, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <main>
                <HashRouter basename="/home">
                <PageNav></PageNav>
                    <Route
                        exact
                        path='/'
                        component={Home}
                    />
                </HashRouter>
            </main >
        );
    }
}

export default App;