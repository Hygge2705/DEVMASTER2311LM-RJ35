import './App.css';
import EventForm1 from './components/EventForm1';
import EventForm2 from './components/EventForm2';
import EventForm3 from './components/EventForm3';

import React, { Component } from 'react';
import EventForm4 from './components/EventForm4';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
        company:"Hygge"
    }
  }
  //hàm xử lý sự kiện khi người dùng click từ component EventForm4
  onChangeCompany=(param)=>{
    this.setState({
      company: param,
    })
  }

  render(){
    return (
      <div className="container border mt-5 bg-light">
        <h1> Demo Event - Form/ List Key/ Render</h1>
        <hr/>
        <div>
        <EventForm1></EventForm1>
        <EventForm2></EventForm2>
        </div>
        <hr/>
        <div>
          <h2> Sử dụng dữ liệu trong state </h2>
          <EventForm3></EventForm3>
        </div>
        <hr/>
        <div>
          <h2> Hiển thị dữ liệu trong state :{this.state.company}</h2>
          <EventForm4 renderCompany={this.state.company} onChangeCompany={this.onChangeCompany}></EventForm4>
        </div>
      </div>
    );
  }
}

