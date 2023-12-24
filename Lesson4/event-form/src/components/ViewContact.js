import React, { Component } from 'react'

export default class ViewContact extends Component {
  render() {
    let {renderContact, renderList} = this.props;
    return (
      <div className='alert alert-danger m-3'>
        <h2>ViewContact</h2>
        <h3>Name: {renderContact.name} </h3>
        <h3>Phone: {renderContact.phone} </h3>
        {
            renderList.map((item, index)=>{
                return(
                    <li>{item.name} - {item.phone} - {item.gender === 1?"Nam":"Nữ"}</li>
                )
            })
        }
      </div>
    )
  }
}
