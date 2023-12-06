//tham số mặc định
//tham số tùy chọn
function add(num1, num2=1){
    return num1+num2;
}
//sử dụng
console.log(add(100)); //tham số num2 mặc định =1
console.log(add(199,200));

function show_name(name){
    name = name ||"Dev";
    console.log("Welcome to ",name);
}
show_name();
show_name("Hygge");