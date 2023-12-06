//sử dụng lại các giá trị cũ khi tạo mới
var oldArray = [1,2,3];
var newArray = [oldArray,4,5];
var newArray2 = [...oldArray,4,5];

console.log(oldArray);
console.log(newArray);
console.log(newArray2);