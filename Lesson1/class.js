class Person{
    constructor(){
        this.name="Hygge";
        this.age=20;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age=age;
    }
    getAge(){
        return this.age;
    }
}
var person = new Person();
person.setAge(21);
console.log("Ten: ",person.getName());
console.log("Tuoi: ", person.getAge());

class Student extends Person{
    constructor(name, age, ID){
        super(name, age);
        this.ID="2003";
    }
    getStudentInfo(){
        return "Ten: "+this.getName()+". Tuoi: "+this.getAge()+". MaSV: "+this.ID;
    }
}

var student = new Student;
console.log(student.getStudentInfo());