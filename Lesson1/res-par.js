//res-parameter
//cú pháp: ...param
function add(num1, num2, ...num){
    tong = num1+num2;
    num.forEach(elment => {
        tong+=element;
    });
    return tong;
}

console.log(add(1,2,3,4));
console.log(add(1,2,3));
console.log(add(1,2,3,10,20,30));