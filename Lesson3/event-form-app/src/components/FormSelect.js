import React, { Component } from 'react'

export default class FormSelect extends Component {
    constructor(props){
        super(props);
        this.state={
            course:'Java'
        }
    }
    //Hàm xử lý sự kiện khi thay đổi dữ liệu trong input
    handleChange=(ev)=>{
        this.setState({
            //giúp ng dùng có thể nhập để thay đổi dữ liệu
            course:ev.target.value,
        })
    }

    handleSubmit=(ev)=>{
        ev.preventDefault();
        alert(this.state.course);
    }
  render() {
    return (
      <div>
        <h2>Form Select</h2>
        <form>
            <div className='form-group'>
                <label>Name: </label>
                <select name='course' value={this.state.course} onChange={this.handleChange}>
                    <option value={'PHP'}>PHP</option>
                    <option value={'C#'}>C#</option>
                    <option value={'Java'}>Java</option>
                </select>
                <label className='aler alert-success'>{this.state.course}</label>
            </div>
                <input type="submit" name='btnSubmit' value={'Submit'} onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}
