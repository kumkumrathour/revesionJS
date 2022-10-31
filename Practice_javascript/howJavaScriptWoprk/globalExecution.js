// console.log(window);
// console.log(this);
// console.log(myFun);
// console.log(fullName);

// function myFun(){
//     console.log("this is me function");
// }

// var firstName = "kumkum";
// var lastName = "rathour";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// function outerFunction(){
//     console.log("hello outerfun");
//     function innerFunction(){
//         console.log("hello to innerfunction");
//     }
//     return innerFunction();
// }
// const ans = outerFunction();
// console.log(ans());


// function printFullName (firstName , lastName){
//     function print(){
//         console.log(firstName , lastName);
//     }
//     return print();
// }
// const ans = printFullName("kumkum","rathour")
// console.log(ans);
// ans()
// function hello(x){
//     const a = 7
//     const b = 9
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const ans = hello("arg");
// ans();

// function myFun(power){
//     return  function (m){
//         console.log("the square is" ,m**power)
//     }
// }
// const ans = myFun(10);
// ans(2);

function func(){
     let count =0 ;
    return function (){

        if(count<1){
            console.log("heello you can me");
            count++;
        }
        else{
            console.log("not call by you");
        }
    }
}
const myFun = func();
myFun()
myFun();
myFun();