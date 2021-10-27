import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/home/homepage.jsx"
import {HashRouter as Router,Switch,Route} from "react-router-dom"
import Form from "./components/create/create"
import Quiz from "./components/quiz/quiz"
import Navbar from "./components/navbar"
import Leaderboard from "./components/leaderboard/leaderboard"
import "./style.css"
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/create">
        <Form />
      </Route>
      <Route  path="/quiz/:id">
        <div>
        <Navbar />
        <Quiz/>
        </div>
        
      </Route>
      <Route  path="/leaderboard/:id">
        <div>
        <Navbar />
        <Leaderboard/>
        </div>
        
      </Route>
    </Switch>
  </Router>
,
  document.getElementById('root')
);

