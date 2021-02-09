import React, { Component } from 'react'
import AppHeader from './components/AppHeader'
import Home from './components/Home/Home'
import About from './components/About/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
// import AppFooter from './components/AppFooter'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <AppHeader/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
             <Route path="/about">
              <About/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/conctact">
              <Contact/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
