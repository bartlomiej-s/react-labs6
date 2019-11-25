import React from 'react'
import AddForm from './AddForm'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      loaded: false,
      adding: false
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
  }

  getData() {
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

  componentDidMount() {
    this.getData();
  }

  addEmployee() {
    this.setState({adding: true})
  }

  cancel() {
    this.setState({adding: false})
  }

  submit() {
  }

  render() {
    const AppVar = (
     <div className="App">
       <div>
        {this.state.loaded && <h1>Employees</h1>}
        {this.state.loaded ? this.state.employees : 'Loading...'}
        {this.state.loaded && <button type="button" onClick={this.addEmployee}>Add Employee</button>}
        {this.state.loaded && this.state.adding && <AddForm cancel={this.cancel} submit={this.submit}/>}
       </div>
     </div>
    )
    return AppVar
  }

}

export default App