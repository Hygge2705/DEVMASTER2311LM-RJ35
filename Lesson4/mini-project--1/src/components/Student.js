import React, { Component } from 'react'

export default class Student extends Component {

  //Hàm xử lý sự kiện
  handleViewOrEdit=(actionName,student)=>{
    this.props.onViewOrEdit(true,actionName,student);
  }
  //Hàm xử lý sự kiện xóa, 
  handleDelete=(student)=>{
    if(window.confirm('Bạn có muốn xóa không?'))
    this.props.onDelete(student)
  }
  render() {
    let {renderStudent, stt}=this.props;
    return (
      <>
        <tr>
            <td>{stt}</td>
            <td>{renderStudent.studentId}</td>
            <td>{renderStudent.studentName}</td>
            <td>{renderStudent.age}</td>
            <td>{renderStudent.sex===true?"Nam":"Nữ"}</td>
            <td>
            <div className="template-demo">
                <button
                type="button"
                className="btn btn-danger btn-icon-text"
                onClick={()=>this.handleViewOrEdit("Close",renderStudent)}
                >
                Xem
                </button>
                <button
                type="button"
                className="btn btn-warning btn-icon-text"
                onClick={()=>this.handleViewOrEdit("Update",renderStudent)}
                >
                Sửa
                </button>
                <button
                type="button"
                className="btn btn-success btn-icon-text"
                onClick={()=>this.handleDelete(renderStudent)}
                >
                Xóa
                </button>
            </div>
            </td>
        </tr>
      </>
    )
  }
}