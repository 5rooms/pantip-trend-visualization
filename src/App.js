import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
