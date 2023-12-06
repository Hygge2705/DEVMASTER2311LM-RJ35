import React from 'react'

function FuncHello(props){
    return(
        <div>
            <h1>Hello World!</h1>
            <h2>Xin chào , {props.name} !</h2>
            <p>{props.name}, {props.age} tuổi.</p>
            <p>Tôi là học viên của Devmaster.</p>
        </div>
    )
}
export default FuncHello