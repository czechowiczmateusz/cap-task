import React, { Suspense, lazy }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const Home = lazy(() => import('./pages/Home/Home'));
const People = lazy(() => import('./pages/People/People'));
const Starships = lazy(() => import('./pages/Starships/Starships'));

const App = () => (
    <Router>
        <CssBaseline />
        <Suspense fallback={<Box display="flex" justifyContent="center" alignItems="center" height="100vh"><CircularProgress/></Box>}>
            <Container fixed>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/people" component={People}/>
                    <Route path="/starships" component={Starships}/>
                </Switch>
            </Container>
        </Suspense>
  </Router>
)

export default App;
