import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Main from './Pages/Main.js'
import MovieView from './Pages/MovieView.js'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/filme/:abacaxi" component={MovieView} />
    </Router>
  );
}

export default App;
