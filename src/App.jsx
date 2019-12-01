import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import PageEmployee from './PageEmployee'
import PageEmployeesList from './PageEmployeesList'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const AppVar = (
     <Router>
       <Switch>
         <Route exact path="/">
           <PageEmployeesList></PageEmployeesList>
         </Route>
         <Route path="/new">
           <PageEmployee></PageEmployee>
         </Route>
       </Switch>
     </Router>
    )

    return AppVar
  }

}

export default App