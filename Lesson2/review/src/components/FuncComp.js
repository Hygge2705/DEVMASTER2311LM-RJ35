import React from 'react'

function FuncComp(props){
    //arrow function
    const show =(param) =>{
        return(
            <>
                <h2 className='alert alert-infor'>Hello {param}</h2>
            </>
        )
    }
    return(
        <>
            <h4> Demo Function Components - Dùng JSX Expression để hiển thị dữ liệu từ props </h4>
            <hr></hr>
            <div className='alert alert-danger'>
                <p>Name: {props.name}</p>
                <p>Add: {props.address}</p>
            </div>
            {show("Hygge")}
        </>
    )
}

export default FuncComp;