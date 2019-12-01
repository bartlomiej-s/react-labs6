import React from 'react'
import AddForm from './AddForm'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      loaded: false,
      adding: false,
      saving: false
    }
    this.addEmployee = this.addEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
  }

  getData() {
    let url= "http://localhost:3004/employees"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let employees = data.map((employee, index) => {
          return (
            <div key={index}>
              <p>ID: {employee.id}<br />
              Name: {employee.name}<br />
              Age: {employee.age}<br />
              Company: {employee.company}<br />
              Email: {employee.email}<br />
              IsActive: {employee.isActive ? "true" : "false"}</p>
              <p><button type="button" onClick={this.delete} idarg={employee.id} indexarg={index}>Delete</button></p>
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

  submit(data) {
    this.setState({saving: true})
    let url= "http://localhost:3004/employees"
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(data);
    this.setState({saving: false, loaded: false})
    this.getData()
  }

  delete = (event) => {
    let id = event.target.getAttribute('idarg')
    let index = event.target.getAttribute('indexarg')
    this.state.employees[index] = (
      <div key={index}>
        <p>Deleting...</p>
        <p><button type="button">Delete</button></p>
      </div>
    )
    this.setState({employees: this.state.employees})
    let url= "http://localhost:3004/employees/"+id
    fetch(url, {
			method: 'DELETE'
    })
    this.setState({loaded: false})
    this.getData()
  }

  render() {
    const AppVarPom = (
      <div>
      {this.state.employees.map((p, i) => {
        return (
          p
        )
      })}
      </div>
    )
    const AppVar = (
     <div className="App">
        {this.state.loaded && <h1>Employees</h1>}
        {this.state.loaded ? AppVarPom : 'Loading...'}
        {this.state.loaded && <button type="button" onClick={this.addEmployee}>Add Employee</button>}
        {this.state.saving && 'Saving...'}
        {this.state.loaded && this.state.adding && <AddForm cancel={this.cancel} submit={this.submit}/>}
     </div>
    )

    return AppVar
  }

}

export default App