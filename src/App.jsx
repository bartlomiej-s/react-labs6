import React from 'react'
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
     <div className="App">
       <PageEmployeesList />
     </div>
    )

    return AppVar
  }

}

export default App