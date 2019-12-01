import React from 'react'
import {
  Link,
  withRouter
} from "react-router-dom"

class PageEmployee extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      saveMessage: ""
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    let namepom = document.getElementsByName('name')[0].value
    let agepom = parseInt(document.getElementsByName('age')[0].value)
    let companypom = document.getElementsByName('company')[0].value
    let emailpom = document.getElementsByName('email')[0].value
    let isActivepom1 = document.getElementsByName('isactive')[0].value.toLowerCase()
    let isActivepom2 = false
    if (isActivepom1=="true" || isActivepom1=="t") isActivepom2 = true
    let data = JSON.stringify({
      name: namepom,
      age: agepom,
      company: companypom,
      email: emailpom,
      isActive: isActivepom2
    })
    if (namepom!="" && !isNaN(agepom) && companypom!="" && emailpom!="")
    {
      const f = () => this.props.history.push("/")
      this.submitInner(data, f)
    }
    else
    {
      this.setState({saveMessage: 'Error, wrong data types!'})
    }
  }

  submitInner(data, _callback) {
    this.setState({saveMessage: 'Saving...'})
    let k = true
    try {
      let url= "http://localhost:3004/employees"
      var request = new XMLHttpRequest();
      request.open('POST', url, false);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      request.send(data);
    }
    catch (e)
    {
      k = false
      this.setState({saveMessage: 'Error, data not saved!'})
    }
    if (k) _callback()
  }

  render() {
    const AppVar = (
      <div>
        <p>Name: <input type="text" name="name" style={{float: 'right', width:'85%'}}/></p>
        <p>Age: <input type="text" name="age" style={{float: 'right', width:'85%'}}/></p>
        <p>Company: <input type="text" name="company" style={{float: 'right', width:'85%'}}/></p>
        <p>Email: <input type="text" name="email" style={{float: 'right', width:'85%'}}/></p>
        <p>IsActive: <input type="text" name="isactive" style={{float: 'right', width:'85%'}}/></p>
        <p><button type="button" onClick={this.submit}>Submit</button>
        <Link to="/"><button type="button">Cancel</button></Link></p>
        {this.state.saveMessage}
      </div>
    )
    return AppVar
  }

}

export default withRouter(PageEmployee)