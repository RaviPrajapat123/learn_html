'use strict'


// let a=prompt("first number?" , 1);
// let b=prompt("second number?" , 2);
// alert(a+b)


// console.log(" "+1+0)
// console.log(" "-1+0)
// console.log(true+false)
// console.log(6/"3")
// console.log("2"*"3")
// console.log(4+5+"px")
// console.log("$"+4+5)
// console.log(" 4 "-2)
// console.log("4px"-2)
// console.log("-9"+5)
// console.log("-9"-5)
// console.log(null+1)
// console.log( undefined +1)
// console.log( "\t\n" -2)




// console.log(5>4)
// console.log("apple">"pineapple")
// console.log("2">"12")
// console.log(undefined==null)
// console.log(undefined===null)
// console.log(null=="\n0\n")
// console.log(null==="\n0\n")


// let message;
// let login=Employee;
// if(login=='Employee'){
//     message='Hello';
// }else if(login=='Director'){
//     message='Greetings'
// }else if(login==''){
//     message=='No login';
// }else{
//     message='';
// }


// let i=3;
// while(i){
//     alert(i--);
// }



//  prime numbers between 1 to n

// let num=prompt("enter a number=")

// for(let i=2;i<=num;i++)
// {   
//     let a=1;
//     for(let j=2;j*j<=i;j++)
//     {
//         if(i%j==0)
//         {
//             a=0;
           
//         }
//     }
//     if(a==1){
//         alert(i);
//     }
// }



// let number=prompt("enter a number=");
// isprime=1;
// if(number<=1)
// {
//     console.log("composite number")
// }
// else if(number>1){
//     for(let i=2;i<number;i++){
//         if(number%i==0){
//             isprime=0;
//             break;
//         }
//         else{
//             isprime=1;
            
//         }
//     }
// }
// if(isprime==0){
//     console.log("number is  prime");
// }
// else{
//     console.log("number is not prime");
// }



// recursion function

// function print(a){
//   console.log(a);
//   if(a>1){
//    a=a-1;
//    return print(a);
//    }
// }
// print(9);




// question 1

// function add(a,b, ...rest){
//       if(rest.length===0){
//     return a+b;
//       }
//       return add(a+b, ...rest)
//     }
// console.log(add(1,2,3,4,5,6,7,8,9));



// function finbb(range){
//     let a=0,b=1;
//     console.log(a,b);
//     for(let i=3;i<=range;i++)
//     {
//         let c= a+b;
//            a=b;
//            b=c;
//         console.log(c)

//      }
// }

// finbb(9);


// function fibo(number){
//   if(number<=1)
//     return number;
//     return fibo(number-2)+fibo(number-1);
// }
//     const response =fibo(6);

// console.log(response)
  


// let n=20.589639;
// alert(n.toFixed(3));


// alert(1.35.toFixed(1))


// let num= Number("ddf");
// alert(num);


// num=1.53556
// alert(Math.round(num*100)/100)
// alert(Math.ceil(3.1))


// alert(.1+.2==.3)
// alert(0.1+0.2)



// alert(0.1.toFixed(20))
// let sum=0.1+0.2;
// alert( +sum.toFixed(2))
// alert( sum.toFixed(2))


// alert(Math.randomInteger(3))


// let a= prompt("enter the first number=");
// let b= prompt("enter the second number=");

//  function sum(a,b){
//   return +a + +b;
//  }

//  alert(sum(a,b))




// let a= +prompt("enter a number")

// if(a==parseInt(a

// )){
//   alert("ok")
// }
// else{
//   alert("no")
  
// let a= +prompt("enter a number") 
// }



// let a=`name: 
// ravi`;
// alert(a)


// alert("hello! my name is Ravi".includes("name"));
// alert("hello! my name is Ravi".startsWith("hel"));
// alert("hello! my name is Ravi".endsWith("Ravi"));


// let str="ravi prajapat";
// alert(str.slice(2,4))

// let str="ravi prajapat";
// alert(str.substring(2,4))


// alert("z".codePointAt(0))

// let str='';
// for(let num=65;num<=220;num++){
//   str =str+String.fromCodePoint(num)
// }

// alert(str)


// function first(str){
//   return str[0].toUpperCase()+ str.slice(1);
// }
// alert(first("ravi"));




// let n=[3,5,56,6,8,5,7]
// let n1=[22,31,76,56,89]


// alert(n.splice(2,5,78,45))
// alert(n)

// alert(n.sort())

// alert(n)
// alert(n.join("+"))

// alert(n.length)

// alert(n.pop())
// alert(n)

// alert(n.push(9))
// alert(n)


// alert(n.shift())
// alert(n)


// alert(n.unshift(13))
// alert(n)

// alert(delete n[2])
// alert(n)
// alert(n.length)


// alert(n.concat(n1))
// alert(n)



// alert(n.length)



// let value=true;
// alert(typeof value);



// value=Number(value)
// alert(typeof value)


// let num=12.566
// alert(num.toFixed(2))

// let str="123"
// alert(typeof str);
// str=Number(str);
// alert(typeof str) 


// let num=2;
// num++;
// alert(num)



// let sayHi=()=>alert("hello")
// sayHi()

// let age= prompt("enter your age=")
// let wel=(age<18)?
// ()=>alert("hello"):
// ()=>alert("greating!");

// wel()



// console.log((Math.round(1.6789*10)/10).toFixed(2))

// console.log(parseInt("1_001_000.01"))
// console.log(parseInt("001_000.01"))


// function noOfNote(n){

//     let devided=parseInt(n/500)
//     let rem=n%500
//     // return devided
//     // return rem
//     if(rem>250){
//         devided+=1

//     }
//     return devided

// }

// const paybleAmt=1251;
// console.log(noOfNote(paybleAmt));

// let num=0x15;
// alert(num.toString(2))

// let str="hello my is ravi prajapat.";
// alert(str.indexOf("z"));

// let str="Widget with id";
// if(str.indexOf("idget"))
// {
//     alert("we found it");
// }




// Q.

// let str="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus, sed impedit soluta nisi animi incidunt, quibusdam laboriosam voluptas perspiciatis aperiam sequi, ex ipsa dolor similique consectetur? Quod asperiores magni, consectetur harum ipsum exercitationem, repellendus, officia tenetur corrupti dignissimos dolor quas. Aliquam quidem, vel autem doloremque magnam ad molestiae quam!";
// const first=0;
//  let second=prompt("enter the number=");
// console.log(str.slice(first,second)+"...")



// Q.



// let user={
//     name:'ravi',
//     age:21,
//     college:'RSSM',
//     entryYear:2021,
//     degree:{
//         complete:true,
//     }
//     }
//     printinfo:function(){
//         return console.log(`${this.name}  is an  ${this.age>=18?" adult can vote ":" not adult cannot vote"} he wnet to , ${this.college} colloge in ${this.entryYear}` )
//     }
// }

// let user1={...user};
// user1.degree=false;
// console.log(user.degree.complete)
// console.log(user1.degree)
// user.printinfo()






// about object


// let user={
//     name:"ravi",
//     age:21,
//     "like birds":true,
// }
// // user.isAdmin=true;
// // delete user.age;
// let key=prompt("enter do you want to know about the user")
// alert(user[key ])

// alert(user["like birds"])






// let codes={
//     "+49":"germany",
//     "+41":"switzerland",
//     "+44":"Britain",
//     "+1":"usa"
// }
// for(let i in codes)
// {
//     alert(+i)
// }






// let user={}
//     user.name="ravi",
//     user.surname="prajapat",


// user.name="rohit";
// // delete user.name
// alert(user.name)




// let user={
//     name:'ravi',
//     age:30,

//     sayHi(){
//         alert(user.age);
//     }
// }
// let admin=user;
// user=null;
// admin.sayHi();




// constructor

// function User(name,isAdmin)
// {
//     this.name=name;
//     this.isAdmin=isAdmin;
// }
// let user=new User('jack',5); 
// console.log(user.name)
// console.log(user.isAdmin)

// let num=0x18;
// console.log(num.toString())



// let user={name:"ravi"};
// let per1={canview:true};
// let per2={canEdit:true};
// Object.assign(user,per1,per2);
// per2.canEdit=false;
// // console.log(user.canEdit)





// let user={
//     name:"ravi",
//     sayHi(){
//         let arrow=()=>console.log(this.name)
//         arrow();
//     }
    
// }
// user.sayHi();


// let arr=[{id:1,name:"ravi"},{id:2,name:"rohit"},{id:3,name:"raj"},{id:4,name:"sachin"}];
let arr=[10,1,2,3,15]
// arr.splice(-1,0,'pankaj','nikhil');
// console.log(arr)
// console.log(arr.indexOf("raj"))
// console.log(arr.includes("raj"))
// console.log(arr.lastIndexOf("raj"))
// console.log(arr.find(item=>item.id==1))
// console.log(arr.findIndex(item=>item.name=="raj"))
// console.log(arr.filter(item=>item.id<3))
// console.log(arr.filter((a)=>a<3))
// let a2=arr.filter((a)=>{
//     return a<6;
// })
// console.log(a2)

arr.map((a,b,array)=>{
    console.log(a,b,array);
})
// console.log(a2)



