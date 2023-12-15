import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state={
            arr: [12,22,23,44],
            name : "Devmaster Academy",
            age: 20
        }
    }
    render() {
    return (
      <div>
        <h2>Demo class Component</h2>
        <div> 
            <h3>Truy cập dữ liệu từ props</h3>
            <p>Name : {this.props.name}</p>
            <p>Age : {this.props.age}</p>
        </div>
        <div> 
            <h3>Truy cập dữ liệu từ props</h3>
            <p>arr : {this.props.arr}</p>
            <p>Name : {this.props.name}</p>
            <p>Age : {this.props.age}</p>
        </div>
      </div>
    )
  }
}
