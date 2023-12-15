import React, { Component } from 'react'

export default class Member extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"Bùi Văn Tèo",
            age: 100
        }
    }
    
    //hàm xử lý sự kiện onClick
    changeName=()=>{
        this.setState({
            name:"Bùi Văn Tý"
        });
    }

    render() {
        let {name, age} = this.state;
        return (
        <div className='alert alert-success'>
            <h2>Member</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button type="button" onClick={this.changeName}>Change Name</button>
        </div>
        )
    }
}
