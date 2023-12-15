// import logo from './logo.svg';
import './App.css';
import FuncComp from './components/FuncComp';
import ClassComp from './components/ClassComp';

function App() {
  //Tạo Biến
  const name="Devmaster Academy";

  //Tạo Hàm
  const show =(nameShow)=>{
    return <h2>Welcome {nameShow}!</h2>
  }

  //Tạo Đối tượng: 
  const obj = {
    name: "Hygge",
    age: 20,
    address: "HaNoi"
  }

  //Tạo element
  const element = (    
    <div className="alert alert-danger">
      <p>Name: {obj.name}</p>
      <p>Age: {obj.age}</p>
      <p>Address: {obj.address}</p>
    </div>
  )
  // Tạo hàm có tham số
  const formatName = (props) =>{
    return(        
      <div className="alert alert-success">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Address: {props.address}</p>
      </div>
    )
  }

  return (
      <div className="container border mt-5">
          <h1>Ôn lại Lesson2</h1>
          <hr></hr>
          <div>
            <h2> JSX Expression </h2>
            <p>{"Demaster"}</p>
            <p>Sử dụng biến name: <b>{name}</b></p>
            <hr></hr>
            <h2> Sử dụng hàm: </h2> 
            {show("Dev")}
            <div className="alert alert-success">
              <p>Name: {obj.name}</p>
              <p>Age: {obj.age}</p>
              <p>Address: {obj.address}</p>
            </div>            
            <hr></hr>
            {element}
            {formatName(obj)}
          </div>
          <div>
            <h2>Function Components</h2>
            <FuncComp/>
            <FuncComp name="Dev" address="HaNoi" email="thom@gmail.com"/>
          </div>
          <div className='alert alert-danger'>
            <ClassComp/>
            <hr/>
            <ClassComp name="Hygge" company="Devmaster"/>
          </div>
      </div>
  );
}

export default App;
