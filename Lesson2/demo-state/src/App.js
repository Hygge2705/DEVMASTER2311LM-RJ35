import React, { Component } from 'react'
import Member from './components/Member';

export default class App extends Component {
  constructor(props){
    super(props);
    //tạo state lưu trữ dữ liệu của App
    this.state={
      name:"Hygge",
      age: 20,
      address: "123@gmail.com"
    }
  }

  //hàm xử lý sự kiện khi thay đổi thông tin
  changeInfor=()=>{
    //cập nhập dữ liệu trong State
    this.setState(
      {
        name: "Nguyễn Hồng Thơm",
        // age: 21,
        // address: "thomthom"
      }
    )
  }

  render() {
    return (      
    <div className="container border mt-5">
      <h1>Demo State!</h1>
      <hr></hr>
      <h2> Hiển thị dữ liệu từ state đã tạo:  </h2>
      <div className='alert alert-danger'>
        <p> Name: {this.state.name}</p>
        <p> Age {this.state.age}</p>
        <p> Address: {this.state.address}</p>
        <button type='button' onClick={this.changeInfor}> Change Infor </button>
      </div>
      <hr></hr>
      <Member></Member>
    </div>
    )
  }
}
