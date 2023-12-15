import React, { Component } from 'react'

export default class EventForm1 extends Component {
    //Hàm xử lý sự kiện khi sự kiện trên Button1 - thực hiện khi render - 1 lần duy nhất
    eventHandleClick1 = () =>{
        alert("Click Button1");
    }
    // Hàm xử lý sự kiện khi người dùng click trên button2
    eventHandleClick2 = ()=>{
        alert("Click Button2");
    }
    //Hàm xử lý các tham số đầu vào
    eventHandleClick3 =(param)=>{
        alert("Hi: "+param)
    }
    render() {
    return (
      <div>
        <h2> Event </h2>
        {/* hàm được gọi khi render(1 lần duy nhất) */}
        {/* <button className='btn btn-primary' onClick={this.eventHandleClick1()}>Click Button1</button> */}
        {/* hàm được gọi khi người dùng click */}
        <button className='btn btn-danger' onClick={this.eventHandleClick2}>Click Button2</button>
        {/* hàm có tham số  */}
        <button className='btn btn-success' onClick={this.eventHandleClick3("Dev")}>Button3</button>

      </div>
    )
  }
}
