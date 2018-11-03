import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Register from './Register'
import Deportes from './Deportes'


class App extends React.Component{
  render(){
    return(
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/deportes" component={Deportes} />
      </Switch>
    </div>
    )
  }
}

export default App
