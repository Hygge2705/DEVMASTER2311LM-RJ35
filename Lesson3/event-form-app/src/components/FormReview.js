import React, { Component } from 'react'

export default class FormReview extends Component {
  render() {
    let {renderData}=this.props;
    return (
      <div className='container alert alert-success'>
        <h2>Thông tin đăng ký</h2>
        <p>Username: {renderData.userName}</p>
        <p>Age: {renderData.age}</p>
        <p>Course: {renderData.course}</p>
      </div>
    )
  }
}
