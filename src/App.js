import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import Main from './Pages/Main.js'
import MovieView from './Pages/MovieView.js'
import MovieAdd from './Pages/MovieAdd.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/filme/novo" component={MovieAdd} />
        <Route path="/filme/:abacaxi" component={MovieView} />
      </Switch>
    </Router>
  );
}

export default App;
