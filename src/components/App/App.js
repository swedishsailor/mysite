import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SalveDevito from '../GamesSites/SalveDevito.js';


class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/salvedevito" component={SalveDevito} exact>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;