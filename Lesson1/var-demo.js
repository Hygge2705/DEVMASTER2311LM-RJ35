var x=10;
if(x==10){
    var x=15;
    console.log("X ben trong if: ",x);
    var y=100;
    console.log("y ben trong la: ",y);
}
console.log("x ben ngoai if: ",x);
console.log("y ben ngoai la: ",y);

function test(){
    var z=200;
    console.log("z ben trong ham: ",z);
}
console.log("z ben ngoai ham: ",z); 
// lỗi do chưa khai báo biến z bên ngoài hàm(vì z đang để kiểu var)
test();
console.log("z ben ngoai ham: ",z);