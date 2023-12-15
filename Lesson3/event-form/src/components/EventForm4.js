import React, { Component } from 'react'

export default class EventForm4 extends Component {
    constructor(props){
        super(props);

    }
    handleChangeCompany=(param)=>{
        //bắn sự kiện lên components cha cũng dùng props
        this.props.onChangeCompay(param);
    }
    render() {
        let {renderCompany} = this.props
        return (
        <div>
            <h2>EventForm4 - event với props (dữ liệu từ App): {renderCompany}</h2>
            <button onClick={()=>this.handleChangeCompany("Hygge")}>ChangeCompany</button>
        </div>
        )
  }
}
