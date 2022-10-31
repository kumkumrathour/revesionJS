// const num = [23,34,42,9,4,532,43,2]
// // function indexing(){
// //     for(let nums of num){
// //         console.log(nums*2);
// //     }
// // }
// // indexing();

// function mult( index ,number ){
//     console.log("the indexing is "+ index);
//     console.log(`${number} *2 is = ${number*2}`);
// }
// // for(let i = 0 ; i <=num.length ; i++){
// //     mult(num[i],i);
// // }

// num.forEach(mult)



// for(let i in num){
//     mult( num,i )
// }

// const arr = [2,34,9,5,6,5,32,46,5];
// arr.forEach(function(num , index){
//     console.log(`the number ${num} is mult by 5 then value is ${num*5} in the index is${index} `)
// })

// const user = [
//     {firstFriend: "palak" ,stream:"com"},
//     {firstFriend: "anushka" , stream:"com"},
//     {firstFriend:"vanishika " , stream: "pcm"},
//     {firstFriend: "tarushi" , stream:"pcm"}
// ]
// user.forEach(function (obj){
//        console.log(obj.stream)
// })

// const arr = [12,3,4,2,45,34,65,2,44,98,23,23,46,43]

//   const ans = function(num){
//         return num*num;
//   } 


//   const the = arr.map(ans);
//   console.log(the);

// const square = arr.map((num,index)=>{
//     console.log(index);
//     return num*num;
// })
// console.log(square);


// const user = [
//         {firstFriend: "palak" ,stream:"com"},
//         {firstFriend: "anushka" , stream:"com"},
//         {firstFriend:"vanishika " , stream: "pcm"},
//         {firstFriend: "tarushi" , stream:"pcm"}
//     ]
// const ans = user.map((obj)=>{
//     console.log(obj.firstFriend);
//     return obj.firstFriend;
// })
// console.log(ans);


// filter number



// const ans = arr.filter((num)=>{
    //     return num%2=== 0;
    // })
    // console.log(ans);

    // reduce method
//     const arr = [3,4,4,5,3,2,24,5,3,3,5,6,8,8,9,9,8,0];
//   const val = arr.reduce((aproval , redused)=>{
//                return aproval+redused;
//   })
// console.log(val);

// sort method 
// const arr = [2,2,1,7,6,4,3,6,7,9,6,4,0];
// arr.sort();
// console.log(arr);
// arr.sort((num,val)=>{
//     return num-val;
// })
// console.log(arr);

// find method 

// const myArray= ["dog" ,"cat", "mouse" ,"bird","babu","baby","jan"]
// const ans =myArray.find((value)=>{
// return value.length===4;
// });
// // console.log(bird);
// console.log(ans);

// const arr = [2,3,44,56,44,56,88,92,86];
//  const ans =arr.some((num)=>{
//     return num%3== 0 ;
// })
// console.log(ans);



// fill method 
const val = [3,4,2,1,3,9,4,8,7];
val.splice(2,5,"hello")
console.log(val);
    


// const myarray = new Array(15).fill(-4);
// console.log(myarray);


// const value = new Array(50).fill(" you ")
// console.log(value);