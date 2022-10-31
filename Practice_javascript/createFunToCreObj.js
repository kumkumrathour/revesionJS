//  const person1 = {
//     Name:"Shivani",
//     key1:"val12",
//     key2:"val22",
//     school:"maharishi",
//     keyFun: function(){
//         consoconstle.log(this);
//         console.log(`my name is ${this.Name} `)
//     }, 
//     keyFunIn:function(){
//        return this.school;
//     }
// }
//  const ans = person1.keyFunIn();
//  console.log(ans);

// function that create object and return a object 

const userMethod ={
    about: function(){
         return `${this.firstName} is ${this.age} with meal id ${this.email}`;

        },
    is18 : function (){
                 return this.age>=18;
}
}
function createObject(firstName , lastName , email , age ){
           const user = {}
           user.firstName = firstName ;
           user.lastName = lastName ;
           user.email = email ; 
           user.age = age ;
           user.about = userMethod.about;
           user.is18 = userMethod.is18;
        return user;
}
const user1 = createObject("Neha" , "rathour" , "kumkumrathour00@gmail.com", 21 );
const user2 = createObject("Mahisha" , "rathour" , "kumkumrathour00@gmail.com", 21 );
const user3 = createObject("Vanshika" , "rathour" , "kumkumrathour00@gmail.com", 21 );
const user4 = createObject("kumkum" , "rathour" , "kumkumrathour00@gmail.com", 21 );
console.log(user1.about());
console.log(user2.about());
console.log(user2.is18());
console.log(user3);
console.log(user4);
//    user.about = function(){
        //     return `${this.firstName} is ${this.age} with meal id ${this.email}`;

        //    }
        //    user.is18= function (){
        //          return this.age>=18;
        //    }
        //    return user;
// console.log(ans);
// console.log(ans);
// console.log(ans);
// console.log(ans);
// const is18Fun = ans.is18();
// console.log(is18Fun);
// const aboutFun = ans.about();
// console.log(aboutFun);


