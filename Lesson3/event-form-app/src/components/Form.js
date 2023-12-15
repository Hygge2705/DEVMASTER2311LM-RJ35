import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            age:'',
            couser:'C#'
        }
    }
    handleChange=(ev)=>{
        let name=ev.target.name;
        let val=ev.target.value;
        this.setState({
            [name]:val,
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.sate);
        //đẩy dữ liệu lên App
        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div className='alert alert-danger mt-3'>
        <h2>Các loại form đã học</h2>
        <form>
            <div className='form-group'>
                <label>Name: </label>
                <input type="text" name='username' className='form-control' value={this.state.username} onChange={this.handleChange}/>
                <label>Age: </label>
                <input type="number" name='age' className='form-control' value={this.state.age} onChange={this.handleChange}/>
                <label>Name: </label>
                <select name='course' value={this.state.course} onChange={this.handleChange}>
                    <option value={'PHP'}>PHP</option>
                    <option value={'C#'}>C#</option>
                    <option value={'Java'}>Java</option>
                </select>
            </div>
                <input type="submit" name='btnSubmit' value={'Submit'} onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}
