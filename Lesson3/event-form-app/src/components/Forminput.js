import React, { Component } from 'react'

export default class Forminput extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'Dev'
        }
    }
    //Hàm xử lý sự kiện khi thay đổi dữ liệu trong input
    handleChange=(event)=>{
        this.setState({
            //giúp ng dùng có thể nhập để thay đổi dữ liệu
            username:event.target.value,
        })
    }
  render() {
    return (
      <div>
        <h2>Form Input</h2>
        <form>
            <div className='form-group'>
                <label>Name: </label>
                <input type="text" name='username' 
                        className='form-control'
                        value={this.state.username}
                        onChange={this.handleChange}/>
            </div>
                <input type="submit" name='btnSubmit' value={'Submit'}/>
        </form>
      </div>
    )
  }
}
