import React, { Component } from 'react'

export default class FormInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:'Giang'
        }
    }
    //Hàm xử lý sự kiện
    handleChange = (ev) =>{
        this.setState({
            studentName:ev.target.value,
        })
    } 
    //submit
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("=======================");
        console.log(this.state.studentName);
        console.log("=======================");
    }
  render() {
    return (
      <div>
            <h2>Sử lý dữ liệu với input:</h2>
            <form >
                <label>Name:</label>
                <input value={this.state.studentName}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
      </div>
    )
  }
}
