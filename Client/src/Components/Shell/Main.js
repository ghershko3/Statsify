import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import MyTeam from '../MyTeam/MyTeam'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/MyTeam' component={MyTeam}/>
  </Switch>
)


export default (Main)