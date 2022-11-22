//Arrow functions

var firstName :string = "resmi12";

let testFun = ()=>{
    console.log(firstName);
}

let Sum = (a:number,b:number)=>{
    console.log(a+b);
}
Sum(1,2);


//type assertions

let id :any;
id='123';
let empid = id as number;
let empid_ = <number>id;
console.log(empid_);

//es6 spread operator
let a:number[] = [1,2,3];
let b :number[] = [10,...a,50];


console.log(b);

//interface
interface Dimension {
    width: string;
    height: string;
}

let _imagedim: Dimension = {
    width: "200px",
    height: "300px"
};

interface Person_{
    id:number;
    fisrtName:string;
    lastName:string;
}
let p1:Person_ = {
    id : 1,
    fisrtName :"john",
    lastName:"ray"

}
console.log("person is",p1);


