import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      loaded: false
    }
  }

  componentDidMount() {
    let url= "http://localhost:3004/employees"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let employees = data.map((employee, index) => {
          return (
            <div key={index}>
              <p>ID: {employee._id}<br />
              Name: {employee.name}<br />
              Age: {employee.age}<br />
              Company: {employee.company}<br />
              Email: {employee.email}<br />
              IsActive: {employee.isActive}</p>
            </div>
          )
        })
        this.setState({
          employees: employees,
          loaded: true
        });
      })
  }

  render() {
    const AppVar = (
     <div className="App">
       {this.state.loaded ? this.state.employees : 'Loading...'}
     </div>
    )
    return AppVar
  }

}

export default App