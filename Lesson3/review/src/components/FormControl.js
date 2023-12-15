import React, { Component } from 'react'

export default class FormControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:'',
            thanhpho: ''
        }
    }

     //Hàm xử lý sự kiện
     handleChange = (ev) =>{
        let name = ev.target.name;
        let value = ev.target.value;
        this.setState({
           [name]:value
        })
    } 
    //submit
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("=======================");
        console.log(this.state);
        console.log("=======================");

        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div className='alert alert-primary'>
            <form >
                <div className='alert alert-primary'>
                    <label>Name:</label>
                    <input name='studentName'
                        value={this.state.studentName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='alert alert-primary'>
                    <label>Thành phố:</label>
                    <select name='thanhpho'
                        value={this.state.thanhpho}
                        onChange={this.handleChange}>
                        <option value={"HN1"}>Hà Nội 1</option>
                        <option value={"HN2"}>Hà Nội 2</option>
                        <option value={"HN3"}>Hà Nội 3</option>
                    </select>
                </div>
                
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
      </div>
    )
  }
}
