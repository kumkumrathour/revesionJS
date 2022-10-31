// function UserForm(firstName , lastName ,age, email){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age ,
//     this.email = email
// }
// UserForm.prototype.about = function(){
//     return `${this.firstName} ${this.lastName} is ${this.age} with ${this.email}`
//       },
// UserForm.prototype.is18 = function (){
//      return this.age>=18;
//     }

// const ans = new  UserForm("kumkum", "rathour","18","kumkumrathour00@gmail.com")
// console.log(ans);
// console.log(ans.is18());
// console.log(ans.about());
// for(let key in ans){
//     console.log(ans.hasOwnProperty(key));
// }


// classes
class createUser{
       constructor(firstName , lastName ,age, email){
        console.log("constructor call");
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age ,
            this.email = email
       }
       about(){
         return `${this.firstName} ${this.lastName} is ${this.age} with ${this.email}`
       }
       is18(){
         return this.age>=18;
       }
}
const ans = new createUser("kumkum", "rathour" , 19 , "kumkum@gamil.com");
const ans1 = new createUser("Neha", "rathour" , 19 , "kumkum@gamil.com");
console.log(ans.about());
console.log(ans1.firstName);
console.log(Object.getPrototypeOf(ans));