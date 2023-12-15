import React, { Component } from 'react'
import Forminput from './components/Forminput';
import FormSelect from './components/FormSelect';
import Form from './components/Form';
import FormReview from './components/FormReview';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userName: '',
      age: 0,
      course:'PHP',
      listNum:[27,5,2003,7,1],
      listPerson:[
        {id:"p1",name:'Thom',age:21},
        {id:"p2",name:'Thom2',age:21},
        {id:"p3",name:'Thom3',age:21},
        {id:"p4",name:'Thom4',age:21},
        {id:"p5",name:'Thom5',age:21}
      ]
    }
  }
  //Hàm xử lý sự kiện từ Form
  handleSubmit=(obj)=>{
    console.log("App",obj);
    console.log("Username: ", obj.name);
    this.setState={
      userName:obj.userName,
      age:obj.age,
      course:obj.course
    }
  }
  render() {
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
      <div className='container border mt-3 bg-white'>
        <h1> Demo ReactJS Form - Controller Component</h1>
        <hr/>
        <Forminput></Forminput>
        <FormSelect/>
        <Form onSubmit={this.handleSubmit}></Form>
        {this.state.userName}
        <FormReview renderData={this.state}/>
        <div className='border m-3 p-3'>
          {/* list key */}
          {
            this.state.listNum.map((item)=>{
              return(
                <button>{item}</button>
              )
            })
          }
        </div>
        <div className='border m-3 p-3'>
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
      </div>
    )
  }
}
