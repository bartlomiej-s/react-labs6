import React from 'react'

class AddForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const AppVar = (
      <div>
        <p>Name: <input type="text" name="name" style={{float: 'right', width:'85%'}}/></p>
        <p>Age: <input type="text" name="age" style={{float: 'right', width:'85%'}}/></p>
        <p>Company: <input type="text" name="company" style={{float: 'right', width:'85%'}}/></p>
        <p>Email: <input type="text" name="email" style={{float: 'right', width:'85%'}}/></p>
        <p>IsActive: <input type="text" name="isactive" style={{float: 'right', width:'85%'}}/></p>
        <p><button type="button" onClick={this.props.submit}>Submit</button>
        <button type="button" onClick={this.props.cancel}>Cancel</button></p>
      </div>
    )
    return AppVar
  }

}

export default AddForm