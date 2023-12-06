import logo from './logo.svg';
import './App.css';
import logoDev from './logo.png'
import FuncHello from './components/FuncHello';
import avt from './avt.jpg';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    Tạo ảnh
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster"></img>
        <img src={logoDev}  alt="logo"/>
      </header>
{/*       
      <FuncHello/>
      <FuncHello name="Hygge" age="20" /> */}
      <hr></hr>
      <Info name="Nguyễn Hồng Thơm" age="20" school="Devmaster"></Info>
      <img src={avt} alt=""></img>
    </div>
  );
}

export default App;
