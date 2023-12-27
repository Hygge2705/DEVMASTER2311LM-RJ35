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
      student:{}, //đối tượng sinh viên sẽ được thêm, sửa, xóa
      keyword:''//từ khóa tìm kiếm
    }
  }
  //Hàm xử lý chức năng: 
  handleAddOrEditView=(toggle, actionName,student)=>{
    this.setState({
      isToggle:toggle,
      actionName: actionName, //actionName trước là biến trong state, còn actionName sau là đẩy từ hàm
      student:student,
      
    })
  }
  //Hàm xử lý sự kiện submit form
  handleSubmit=(toggle,actionName,student)=>{
      
    let {students}=this.state;
    //khi thêm mới
    if(actionName==="Add New"){
      students.push(student);
    }
    //khi sửa:
    if(actionName==="Update"){
      for(let i=0;i<students.length;i++){
        if(students[i].studentId===student.studentId){
          students[i]=student;
          break;
        }
      }
    }
    this.setState({
      isToggle:toggle,
      students:students
    })
  }
  handleDelete=(student)=>{
    let {students}=this.state;
    let studentList = students.filter(x=>x.studentId!==student.studentId);
    this.setState({
      students:studentList
    })
  }
  //hàm xử lý sự kiện tìm kiếm
  handleSearch=(keyword)=>{
      this.setState({
        keyword:keyword
      })
  }
  render() {
    //render form theo isToggle
    let elementForm = this.state.isToggle === true?
     <Form renderActionName={this.state.actionName}
        renderStudent={this.state.student}
        onSubmit={this.handleSubmit}
     /> : "";
     let {keyword,students}=this.state;
     let dataFilter = students;
     if(keyword!==''){
      dataFilter=students.filter(x=>x.studentName.toLowerCase().includes(keyword.toLowerCase()))
     }
    return (
      <div className='container fluid'>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control onAdd={this.handleAddOrEditView} onSearch={this.handleSearch}/> 
              <ListStudent 
                        // renderStudents = {this.state.students}
                        renderStudents = {dataFilter}
                        onViewOrEdit={this.handleAddOrEditView}
                        onDelete={this.handleDelete}
              />
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