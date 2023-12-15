import React from 'react'

function EventForm2() {
    // hàm xử lý sự kiện button 1
    const evenHandleClickButton1 = ()=>{
        alert("load - render...")
    }
    const evenHandleClickButton2 = ()=>{
        alert("After click button 2")
    }
    const evenHandleClickButton3 = (param)=>{
        alert("After click button 3:  Hi, "+param)
    }
  return (
    <div className='mt-3'>
        <h2>Event Form - Function Component</h2>
        {/* thực hiện khi render */}
        <button className='btn btn-warning' onClick={evenHandleClickButton1()}>Button 1</button>
        {/* thực hiện khi click */}
        <button className='btn btn-danger' onClick={evenHandleClickButton2}>Button 2</button>
        {/* thực hiện khi click và có tham số */}
        <button className='btn btn-success' onClick={()=>evenHandleClickButton3("Hygge")}>Button 3</button>
    </div>
  )
}

export default EventForm2