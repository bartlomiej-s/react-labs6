import React from 'react'

class PageEmployee extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
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
    if (namepom!="" && !isNaN(agepom) && companypom!="" && emailpom!="") this.props.submit(data)
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
        <button type="button" onClick={this.props.cancel}>Cancel</button></p>
      </div>
    )
    return AppVar
  }

}

export default PageEmployee