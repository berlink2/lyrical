import React from 'react';
import {Navbar} from './components/layout/navbar';
import {Index} from './components/layout/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from './context'
import {Lyrics} from './components/songs/Lyrics'

import './App.css';

function App() {
  return (
    <Provider>
    <Router>
<React.Fragment>
    <Navbar />
<div className="container">
  <Switch>
    <Route exact path="/" component={Index} />
    <Route exact path="/lyrics/song/:id" component={Lyrics} />
  </Switch>
</div>
    </React.Fragment>
  </Router>
  </Provider>
  );
}

export default App;
