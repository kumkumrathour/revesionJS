// method funtion inside object

// const outFun= function(){
//     console.log(`my name is ${this.Name}`)
// }

// const person = {
//     Name:"Kumkum",
//     key1:"val1",
//     key2:"val2",
//     keyFun: outFun
// }
// const person1 = {
//     Name:"Shivani",
//     key1:"val12",
//     key2:"val22",
//     keyFun: outFun
// }
// const person2 = {
//     Name:"Priya",
//     key1:"val13",
//     key2:"val23co",
//     keyFun: outFun
// }
// person2.keyFun();

// function myFun(){
//     console.log(this);
//     console.log(window);
// }

// myFun()
 
// const person1 = {
//         Name:"Shivani",
//         key1:"val12",
//         key2:"val22",
//         school:"maharishi",
//         keyFun: function(happy,key,key2 ){
//             console.log(`my name is ${this.Name} is ${happy} is she ${key} value ${key2}`)
//         }
//     }
//     const person2 = {
//         Name:"Priya",
//         key1:"val13",
//         key2:"val23co",
//         coaching:"11 student",
//         // happy: "smile"

//     }
//     // person2.keyFun()
//     // person1.call(outFun)
// person1.keyFun.apply(person2 ,["prity","smaile","sweet"])   
// //  person1.keyFun.apply(person2)
// //   person1.keyFun.bind(person2)


 person1 = {
    Name:"Shivani",
    key1:"val12",
    key2:"val22",
    school:"maharishi",
    keyFun: ()=>{
        consoconstle.log(this);
        console.log(`my name is ${this.Name} `)
    }
}
person1.keyFun();