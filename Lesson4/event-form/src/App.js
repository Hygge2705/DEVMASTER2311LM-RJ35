import React, { Component } from 'react'
import FormContact from './components/FormContact';
import ViewContact from './components/ViewContact';

export default class App extends Component {
  constructor(props){
    super(props);
    //khởi tạo đối tượng state:
    this.state={
      name:"Hygge",
      age:21,
      phone: '0962019693',
      arr:[
        {name: "Thơm Thơm", phone:'0962019693', gender:1},
        {name: "Hygge", phone:'021213123', gender:0},
      ],
    }
  }
  //Hàm xử lý sự kiện:
  //Hàm không tham số
  handleClick=()=>{
    alert("Hàm không có tham số.");
  }
  //Hàm có tham số
  handleClick2=(param)=>{
    console.log(param);;
  }

  //Hàm thay đổi state:
  handleChange=()=>{
    this.setState({
      name:"Devmaster",
    })
  }
  //Hàm nhận Submit từ component FormContat
  handleSubmit=(obj)=>{
    console.log("FormContact -> App: ", obj);
    this.setState({
      name: obj.name,
      phone: obj.phone,
    })
  }

  render() {
    return (
      <div className="container border mt-5">
        <h1>Review Event Form</h1>
        <hr/>
        <button onClick={this.handleClick}>Click Here</button>
        <button onClick={()=>this.handleClick2("Hygge")}>Click Here 2</button>
        {/* //sự kiện biến đổi giá trị trong state */}
        <button onClick={this.handleChange}>Change name: <b>{this.state.name}</b></button>

        <FormContact onSubmit={this.handleSubmit}/>
        <ViewContact renderContact={this.state} renderList={this.state.arr}/>

      </div>
    )
  }
}
