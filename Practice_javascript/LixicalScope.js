// b =34;

// const mainFun = ()=>{
//     a =9 ;
//     console.log("hello main");
//      const fun1 =()=>{
//         b =8;
//       console.log("FUN1 value");
//       console.log(b);
// }
// const fun2 = ()=>{
//     c=7;
//     console.log("fun2 value2");
//     console.log(a);
// }
// fun1();
// fun2();
// };
// mainFun()
// console.log(b);

// const val1 = "hello opening"
// function main(){
//     const val1 = "anjali";
//     function myFun(){
//         const val1 = "prite inside";
//         console.log("inside the myfun", val1);

//     }
//     myFun();
//     console.log(val1);
// }
// main()
// console.log(val1);

// let and const are block scope and var is a function scope
// {
//     var firstName= "kumkum";

// }
// {
//     // var firstName= " neha "
//     console.log(firstName);
// }
// console.log(firstName);

// if(false){
//     let val = " kumkum";
//     console.log(val);
// }
// else{
//     let val = " neha";
//     console.log(val);
// }


// function myapp(){
//     // let firstName =" priya"
//     if(true){
//         let firstName ="kumkum";
//         console.log(firstName);
//     }
//     console.log(firstName);
// }
// myapp();

// function addTwo(a ,b = 5){
//     return a+b;
// }
// const val = addTwo(8);
// console.log(val)

// function myFun(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myFun(3,5,9 ,43,3,4,532,)
// function sumOfAll (...a){
//     let total = 0
//     for(let no of a){
//          total = total+no;
//     }
//     return total;
// }
// // sumOfAll(4,5,5,66,3,8,56,53,98)
// const ans = sumOfAll(2,3,4,4,5,6,9,7,6,43)
// console.log((ans));

// parameter destrining

const person={
    id: 21,
    name: "kumkum",
    classValue: "uit rgpv"
}
function objectPerson ({id , name ,classValue}){
    console.log(id);
    console.log(name);
    console.log(classValue);
}
objectPerson(person);




