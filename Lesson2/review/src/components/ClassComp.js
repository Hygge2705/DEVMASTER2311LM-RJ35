import {React,Component} from 'react';
import FuncCompChild from './FuncCompChild';

//Xây dựng class component
class ClassComp extends Component{
    // ClassComp có constructor được kế thừa dữ liệu từ các lớp cha. từ khóa super()
    constructor(props){
        super(props);
    }

    //arrow function
    show =(param) =>{
        return(
            <>
                <h2 className='alert alert-infor'>Hello {param}</h2>
            </>
        )
    }

    //Trả về kết quả React element thông qua hàm render
    render(){
        let{name, company}=this.props;
        return(
            <>
                <h1> ClassComponent Demo! Hiển thị dữ liệu từ props.</h1>
                <h3> Welcome {this.props.name} !</h3>
                <div className='alert'>
                    <h3>Name: {name}</h3>
                    <h3>Company: {company}</h3>
                </div>
                <div>
                    <h2>Component con: Biểu diễn các component lồng nhau</h2>
                    <FuncCompChild/>
                </div>
                <div>
                    {this.show("Hygge")}
                </div>
            </>
        )
    }
}

export default ClassComp;