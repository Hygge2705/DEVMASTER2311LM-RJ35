//lấy ra một số thành phần trong mảng/đối tượng
var arr=[1,2,3,4,6,7]
var [a,b]=arr;
console.log("a=",a);
console.log("b=",b);
var [a,b,c]=arr;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

//Ví dụ
var objPerson={
    name:"Hygge",
    age: 20,
    skill: "all",
    address:"Ha Noi"
}
var {name, skill, address} = objPerson;
console.log("name= ",name);
console.log("skill=",skill);
console.log("Address= ",address);