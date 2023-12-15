import React from 'react'

// export default function ButtonHandle(props) {
export default function ButtonHandle({onChangeData}) {

    // Hàm sử lý sự kiện
    const fn_Button1 = () =>{
        alert("fn_Button1");
    }
    function fn_Button2(){
        alert("fb_Button2")
    }
    const fn_Button3 = (param) =>{
        alert(param)
    }
    // bắt sự kiện lên app
    const fn_ChangeData = ()=>{
        // props.onChangeData("Devmaster Academy")
        onChangeData("Devmaster Academy")
    }
  return (
    <div>
        <h1>Handle Click</h1>
        {/* Gọi sự kiện không tham số onclick={function()} => chỉ thực hiện khi render
        Gọi ----------------------onclick={function} => thực hiện khi click */}
        {/* gọi function */}
        {/* <button className='btn btn-primary' onClick={fn_Button1()}>Butotn 1</button>
        <button className='btn btn-primary' onClick={fn_Button2()}>Butotn 2</button> */}
        <button className='btn btn-primary mx-2' onClick={fn_Button1}>Button 3</button>

         {/* Gọi sự kiện có tham số onclick={function(param)} => chỉ thực hiện khi render
            Gọi ----------------------onclick={()=>function("param")} => thực hiện khi click */}
        <button className='btn btn-primary mx-2' onClick={()=>fn_Button3("Giang")}>Button 4</button>
        <button className='btn btn-primary mx-2' onClick={fn_ChangeData}>Change data App</button>
    </div>
  )
}
