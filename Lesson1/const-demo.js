//khai báo với const
const x=27;
console.log("Gia tri cua x la: ",x)
function fn_const(){
    const x=200;
    console.log("Gia tri cua x trong function: ",x);
}
fn_const();
if(x==27){
    x=2000;
    console.log("Gia tri cua x trong if: ",x);
}