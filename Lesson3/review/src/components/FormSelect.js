import React, { Component } from 'react'

export default class FormSelect extends Component {
    constructor(props){
        super(props);
        this.state = {
            thanhpho:''
        }
    }
    //Hàm xử lý sự kiện
    handleChange = (ev) =>{
        this.setState({
            thanhpho:ev.target.value,
        })
    } 
    //submit
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("=======================");
        console.log(this.state.thanhpho);
        console.log("=======================");
    }
    render() {
        return (
            <div>
                <h2>Sử lý dữ liệu với select:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <select value={this.state.thanhpho}
                        onChange={this.handleChange}>
                        <option value={"HN1"}>Hà Nội 1</option>
                        <option value={"HN2"}>Hà Nội 2</option>
                        <option value={"HN3"}>Hà Nội 3</option>
                    </select>
                    <button >Submit</button>
                </form>
            </div>
        )
    }
}
