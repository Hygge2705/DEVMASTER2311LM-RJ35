import React, { Component } from 'react'
import Control from './components/Control'
import ListStudent from './components/ListStudent'
import Form from './components/Form'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      students:[
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
      ],
      isToggle: false, //Ban đầu form không hiển thị
      actionName:'', //trạng thái quản lý nút hiển thị trên form(add, update, close)
    }
  }
  //Hàm xử lý chức năng: 
  handleAddOrEditView=(toggle, actionName)=>{
    this.setState({
      isToggle:toggle,
      actionName: actionName, //actionName trước là biến trong state, còn actionName sau là đẩy từ hàm

    })
  }
  render() {
    //render form theo isToggle
    let elementForm = this.state.isToggle === true? <Form renderActionName={this.state.actionName}/> : "";
    return (
      <div className='container fluid'>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control onAdd={this.handleAddOrEditView}/> 
              <ListStudent renderStudents = {this.state.students}/>
            </div>
          </div>
          <div className="col-5 grid-margin">
            <div className="card">
              {elementForm}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
