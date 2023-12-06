import React from 'react'

function Info(props){
    return(
        <div>
            <h1>Họ tên: {props.name}</h1>
            <h3>
                Tuổi : {props.age}.
                Học viên {props.school}!
            </h3>
        </div>
    )
}
export default Info