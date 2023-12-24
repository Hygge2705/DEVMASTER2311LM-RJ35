import React, { Component } from 'react'

export default class FormContact extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "Hygge",
            phone:'0962019693',
        }
    }
    //hàm xử lý sự kiện
    handleChange=(event)=>{
        let name = event.target.name; //lấy ra tên điều khiển đang tương tác
        let value = event.target.value; //lấy ra giá trị của điều khiển
        //cập nhật lại state
        this.setState({
            [name]:value,
        })
    }
    //hàm xử lý sự kiện khi ấn Submit form: Chuyển dữ liệu lên app component
    handleSubmit=(event)=>{
        event.preventDefault();
        // this.props.onSubmit(this.state.name, this.state.phone); : Chuyển theo từng thuộc tính
        this.props.onSubmit(this.state); //Chuyển cả 1 đối tượng (Obj)
    } 

    render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Contact</h2>
        <form>
            <div className='form-group'>
                <label>Name: </label>
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange}></input>
            </div>
            <div className='form-group'>
                <label>Phone: </label>
                <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange}></input>
            </div>
            <button onClick={this.handleSubmit}>Gửi lên App</button>
        </form>
      </div>
    )
  }
}
