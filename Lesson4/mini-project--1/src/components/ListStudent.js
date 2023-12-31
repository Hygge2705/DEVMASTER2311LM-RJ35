import React, { Component } from 'react'
import Student from './Student'

export default class ListStudent extends Component {

    //Hàm xử lý sự kiện
    handleViewOrEdit=(toggle,actionName,student)=>{
        this.props.onViewOrEdit(toggle,actionName,student);
    }
    //Hàm xử lý sự kiện xóa
    handleDelete=(student)=>{
        this.props.onDelete(student);
    }

  render() {
    let {renderStudents}=this.props; //lấy ra một mảng các đối tượng sinh viên
    //duyệt mảng và hiển thị cho từng sinh viên: 
    let elementStudent = renderStudents.map((item, index)=>{
        return <Student key={item.studentId} renderStudent={item} stt={index+1}
                    onViewOrEdit={this.handleViewOrEdit}
                    onDelete={this.handleDelete}
                />
    })
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sinh viên</th>
                    <th>Tên sinh viên</th>
                    <th>Tuổi</th>
                    <th>Giới tính</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                    {elementStudent}
                </tbody>
            </table>
            </div>
        </div>
    )
  }
}