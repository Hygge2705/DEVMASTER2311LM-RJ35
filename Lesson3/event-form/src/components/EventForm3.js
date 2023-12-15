import React, { Component } from 'react'

export default class EvenForm3 extends Component {
  constructor(props){
    super(props)
    //quản lý dữ liệu thông qua đối tượng state
    this.state ={
      name: "Hygge",
      age: 20,
      address: "Hà Nội"
    }
  }
  //Hàm xử lý sự kiện khi click Button 1
  evenHandleClickButton1 = ()=>{
    alert(this.state.name+"\n"+this.state.age+"\n"+this.state.address);
  }
  evenHandleChange = (name, age, address)=>{
    this.setState({
      name:name,
      age:age,
      address:address
    })
    alert(this.state.name+"\n"+this.state.age+"\n"+this.state.address);
  }

  render() {
    return (
      <div>
        <h3>Event -  có sử sụng State</h3>
        {/* phát sinh sự kiện lấy dữ liệu trong state */}
        <button onClick={this.evenHandleClickButton1}>Button 1</button>
        {/* phát sinh sự kiện làm thay đổi state */}
        <button onClick={()=>this.evenHandleChange("Thơm",21,"Phú Xuyên")}>Change State Button 1</button>
      </div>
    )
  }
}
