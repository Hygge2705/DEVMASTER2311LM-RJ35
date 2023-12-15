import React, { Component } from 'react'

export default class ListView extends Component {
  render() {
    let {renderPerson} =this.props;
    let elementPerson = this.state.listPerson.map((person,index)=>{
        return(
          <>
            <tr>key={index}
              <td></td>
            </tr>
          </>
        )
      })
    return (
      <div>

        <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>name</td>
                <td>Age</td>
              </tr>
            </thead>
            <tbody>
              {elementPerson}
            </tbody>
          </table>
      </div>
    )
  }
}
