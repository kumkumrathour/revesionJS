// function obj (){
//     function obj1(){
// console.log("hello dad");
//     }
//     obj1();
    
// }
// obj();
// function sum (a){
//     console.log("the sum is " ,a);
//     a()
// }
// function value(){
//     console.log("call me back");
// }
// sum(value);

function myfun(){
     function hello (){
        console.log("the sum is here")
     }
     return hello;
}
const ans = myfun();
console.log(ans());






