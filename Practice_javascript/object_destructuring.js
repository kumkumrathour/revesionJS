// const h1 = "neha";
// const h2 = "rathpur";
// const a1 = 'apoo';
// const a2 = 'panday';
// console.log(h1)

// const obj = {
//     [h1]:a1,
//     [h2]:a2
// }
// console.log(obj);

// // spreacin array
// const a = [23,4,45,5,3,23,4,3,9,234]
// const b = [12,345,46,564,342,98,456,5,78,89]
// const  val=[...a,...b ]
// console.log(val)



// spread operator in objects
// const  ab = {
//     va1: "priya",
//     va2: "rathour",
//     age: 23,
//     no:2223456
// }

// const  abc = {
//     va1:'abhay',
//     val1: "kumkum",
//     val2: "rathour",
//     ages: 23,
//     num:2223456
// }
// const ab1 = {...ab ,...abc ,key:'prite'}
// const hg = {..."nsdjd"}
// console.log(hg);
// console.log(ab1);






// var value = {
//        h1 : "neha",
//        h2 : "rathpur",
//        a1 : 'apoo',
//        a2 : 'panday'
// }
// // value [h1] = value[a1];
// // value [h2] = value[a2];
// value [h1] = "kumkum"
// console.log(value)

// object destructuring 
// const obj1 ={
//     key1:"nice",
//     key2:'beautiful',
//     key3:'amazing',
//     key4:'lovely'
// }
// const obj2 = {
//     val1: "smart",
//     val2: "brave",
//     val3: 'marvalus',
//     val4: 'prospesious'
// }
// // obj1[key1] = [sndc,dniu,ediruf];
// const {key1:value,key2:girl ,...restValue} = obj1
// console.log(value)
// console.log(girl)
// console.log(restValue);

let obj = [
    {
        val:"hello",
        val1: "namaste",
        val2:" vanakam",
      },
      {
         val:"sweet",
        val1:"nice",
        val2:"bihave"
      },
      {
        val:832,
        val1:344,
        val2:456
      }
]
// const value = [...obj]
// const {val,val1}= obj
// console.log(obj.val);
const [{val} ,kum, val2]= obj
console.log(val);
console.log(kum.val1);
console.log(val2);
// for (let key of obj){
//     console.log(key.val);
// }



















