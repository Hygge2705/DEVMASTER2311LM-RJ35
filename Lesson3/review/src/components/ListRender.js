import React, { Component } from 'react'

export default class ListRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[12,23,44,66],

        }
    }
  render() {
    let elementNum = this.state.arr.map((item,index)=>{
        return <>
            <li key={index}>{item}</li>
        </>
    })
    return (
      <div>
        <h2>List Map</h2>
        <hr/>
        <ul>
            {elementNum}
        </ul>
      </div>
    )
  }
}
