"use strict";
// const person={
//     firstName:"ravi",
//     lastName:"prajapat",
//     age:21,

// }

// delete key from obj

// person.class="passed final";
// delete person.age
// alert(person.lastName);



// access object elements

// let text="";
// for(let x in person)
// {
//     text+=person[x]+" ";
// }
// alert(text)



//  ternary opertor

// let age=prompt("enter your age");
// alert(age<0?"valid age": age>10 && age<15 ? "but you are kid" : age>18?"not a kid" :"invalid age")



// number is divisible by 2 or 3 

// let num=prompt("enter any number=");
// if(num%2==0 && num%3==0)
// {
//     alert(num +" is divisible by 2 and 3")
// }
// else{
//     alert("not divisible")
// }

// const marks={
//     harry:98,
//     rohan:70,
//     aakash:7
// }

// for(let i=0;i<Object.keys(marks).length;i++)
// {
//     alert("the marks of " + Object.keys(marks)[i]+ " are " +marks[Object.keys(marks)[i]])
// }

// for(let x in marks)
// {
//     alert("The marks of " +x +" are "+marks[x])
// }


// let cn=5;
// let i
// while( i != cn)
// {
//     i=prompt("enter the number");
    
// }
// alert("you enterd the correct number")


// const mean =(a,b,c,d)=>
// {
//     return (a+b+c+d)/4;
// }
// let y=mean(1,2,3,4)
// alert(y)



// String

// let str="ravi"
// alert(str.length)

// alert(`${str} prajapat`)

// let str="bana\rna"
// alert(str,str.length)



// strings methods

// let str="ravi prajapat"
// alert(str.replace("ravi","kavi "))

// let arr=[1,2,3,4,5]
// let a=arr.splice(1,3,1.5)
// console.log(arr)

// let a=arr.unshift(20,11,12)
// alert(arr)


// console.log(arr,"A=");

// console.log(arr.slice(2,4),"slice=--=")
// console.log(arr,"=-=-=-B")
// console.log(arr.splice(2,3))
// console.log(arr,"=-=-=-c")


let text="hello world";
// console.log(text.includes("world", 6));
// console.log(text.endsWith("o",5 ))
// console.log(text.indexOf("ello",3 ))
// console.log(text.match(/o/g))
// console.log(text.match(/l/g))
// console.log("abc ".repeat(2))
// console.log(text.search(/O/i))
// console.log(text.substr(-5,-1))
// console.log(text.replace('l',"r"))
// console.log(text.codePointAt('e'))
// let inp=prompt("enter the number","12")





// console.log(document.body.childNodes[0])
// console.log(document.body.lastChildChild)
// console.log(document.body.childNodes)






// array

// let marks=[2,3,24,14,3]
// marks[0]=10;
// alert(marks)
// for(let i=0;i<marks.length;i++)
// {
//     alert(marks[i])
// }

// let a=marks.toString()
// console.log(a)

// let a=marks.join("$")
// console.log(a)

// let a=marks.push(23.34,23)
// console.log(marks)

// let a=marks.pop()
// console.log(marks)

// let a=marks.unshift(11,12,12)
// console.log(marks)

// let a=marks.shift()
// console.log(marks)

// let a=marks.splice(1,3,12,13)
// console.log(marks)

// let a=marks.reverse(1,3)
// console.log(marks)

// let a=marks.sort()
// marks.sort((a,b)=>a-b)
// console.log(marks)

// let a=marks.slice(1,4)
// console.log(a)









// loops in array

// marks.forEach((element,index,array)=>{
//     console.log(element,index,array)
// })
 

// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i])
// }


// for(let x of marks)
// {
//     console.log(x)
// }

// for(let x in marks)
// {
//     console.log(x)
// }

// let name="ravi prajapat"
// console.log(Array.from(name))




// arrays questions

// Q.1

// let arr=[2,4,56,7,47,5]
// let a=prompt("enter the any number=")
// a=Number.parseInt(a)
// arr.push(a)
// alert(arr)




// Q.2

// let arr=[1,5,4,8,9,5,4]
// while(true)
//     {
//     let a=parseInt(prompt("etner the number="))
//     if(a==0)
//     {
//         break
//     }
//     arr.push(a)
         
// }
// alert(arr)




// Q.3

// let arr=[2,34,7,50,20,30,10,100,24]
// let a=arr.filter((elemnet)=>{
//     if( elemnet%10==0)
//     {
//         return elemnet
//     }
// })
// alert(a)





// Q.4

// let arr=[2,4,6,4,8,6]
// let a;
// for(let x=0;x<arr.length;x++)
// {
//     console.log(arr[x]**2);
// }

// for(let x=0;x<arr.length;x++)
// {
//  a=square();
//  console.log(a)
// }



// let a=Math.floor((Math.random()*100)+1);
// alert(a);
//  let b=prompt("guess the number");
//  let chances=1;
//  while(a!=b)
// {
//     if(a==b)
//     {
//          alert("Congradulation! you guess the actual number.")
//          alert("you guess the actual number in chances=" +chances)
        
//   }
// else if(a>b)
// {
//     alert("the number is less than actual number")
//     let b=prompt("guess the again")
    
// }
// else if(a<b){
//     alert("the number is greater than actual number")
//     let b=prompt("guess the again")

// }
// else{
//     let b=prompt("guess the again")
// }
//  }
//  alert("you guessed it right\n you took" +chances+"chaneces to guess the right number");
 


// let str="hello world"
// alert(str.includes("world",1))

// let num=[1,2,3,4,5]
// alert(num.includes(1,0))





// duplicate a array

// let arr=[1,2,3,4,5]
// alert(arr.concat(arr))



// Q. write a function  that reverse a number

// mathdo-1
// function reverse(num){
//     let rev=0;
//     while(num!=0){
        
//         let rem=num%10;
//         rev=rev*10+rem;
//      num =Math.floor(num/10);
  
//     }
//     return rev
// }
// alert(reverse(12))

// method-2
// let num=123;
// alert(Number(num.toString().split("").reverse().join("")))




// Q.  write a javascript function that checks whether a passed string is palindrome or not

// function checkPalindrome(str)
// {
//      let rev =str.split("").reverse().join("")
//      if(str==rev)
//      {
//           return "palindrome"
//      }
//      else{
//           return "not"
//      }

// }
// alert(checkPalindrome("poop"))
// alert(checkPalindrome("poop"))




// write a js function that returns a passed string with letters in alphabetical order

// function  stringAlphaBeticalOrder(str)
// {
//      return str.split("").sort()
// }
// alert(stringAlphaBeticalOrder("harsh"))





// write a js function that accepts a string  as a parameter and converts the first letter of each word of the string in upper case

// function convertsFirstLetter(str)
// {
//    var allwords=   str.split(" ").map(function(word){
//         return  word.charAt(0).toUpperCase()+word.substring(1)
//       })
//       return allwords.join(" ")
// }

// alert(convertsFirstLetter("harsh bhai kaise ho"))





//siblings 

// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// a=document.body.firstChild
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)



// const changeBgRed=()=>{
//     document.body.firstElementChild.style.backgroud="red"
// }

// let b=document.body
// console.log(b.firstElementChild)

// let user ={
//     name:'ravi',
//     age:21,
//     college:'rssm',
//     enteyyear:2021,
//     //  printinfo():console.log(name)
// }
// user.printinfo();

// alert('hello');
// [1,2].forEach(alert)









//  destructuring assingment

// let user={
//     name:'ravi',
//     age:21,
//     address:{
//         city:'jaipur'
//     }
// }


// let{name:fullName,age:currentAge=20,phoneNo=112345,address:{city,st:state="rajasthan"}}=user;
// console.log(fullName,city,phoneNo,currentAge,state)











// date and time method

// let now=new Date();
// console.log(now)
// console.log(now.toString())
// console.log(now.toDateString())
// console.log(now.toLocaleString())
// console.log(typeof now)
// let mydate=new Date(2023,0,23)
// console.log(mydate.toString())
// console.log(now.getFullYear())
// console.log(now.getDay())
// console.log(now.getMinutes())
// console.log(now.getMillisec onds())
// console.log(now.getMilliseconds())
// console.log(now.setFullYear(2025)) 

// let Dec31_1969 = new Date(2014, 0, 3);
// let days=['su','mo','tu','we','th','fr','sa']
// // console.log( Dec31_1969.setHours(0) ); 
// let day=Dec31_1969.getDay().toString()
// console.log(days[day])





// JSON

// let user={
//         name:'ravi',
//         age:21,
//         address:{
//             city:'jaipur'
//         }
//     }

//     let json=JSON.stringify(user);
//     console.log(json)
//     let objson=JSON.parse(json)
//     console.log(objson)
//     console.log(typeof(objson))
//     console.log(typeof(json))


// const [...a]=[10,20,30,40,50]
// console.log(a[3])

// function abc(name){
//     this.name=name;
    // console.log("hii");
// }
// const value=new abc("ravi");
// console.log(value)



// const date1=new Date("2024-11-02T11:12:13.102Z");
// console.log(date1.toUTCString())
// let gm=5*60;
// let add=new Date(date1.getTime()+gm*60*1000);
// console.log(add.toUTCString())
// let time=date1.getTime()
// console.log(time)
// let date2=date1.getTime()
// console.log(date2.toString())
// date3=date2-1800000
// console.log(date3.)
// console.log(date3)





// let date=new Date("2024-11-21");
// let date1=new Date("2024-12-2");
// let date3=date1.getTime()-date.getTime();
 
// console.log(Math.round(date3/(24*60*60*1000)))
// console.log(date3)



// function factorial(n)
// {
//     if(n==0||n===1)
//     {
//         return 1;
//     }
//     return n* factorial(n-1);
// }
// console.log(factorial(3))


// let sayHi=function(){
//     console.log("hi");
// }

// console.log(sayHi.name)

// function f(sayHi=function(){})
// {
//     console.log(sayHi.name)
// }
// f()

// let arr = [function(){}];

// console.log( arr[0] );


// let a=2;
// switch(a)
// {
//     case 0:console.log("0") ;break

//     case 1:console.log("1");break
//     case 2:
//         case 3: console.log("2,3");
//         break;
// }




// function hello(fname,lname){
//     return fname+lname
// }
// let a=hello('ravi', 4 ,6)
// console.log(a)




// let sayHi=function(name)
// {
//     console.log(`hello, ${name}`)
// }
// sayHi("ravi")



// let sum=(a,b)=>{
//     console.log("a+b=" , a+b)
// }

// sum(3,4)

// let age=19;
// let wel=(age<18)?
// ()=>console.log("hello"):
// ()=>console.log("greetings");
// wel()


// let sum=(a,b)=>{
//     let result=a+b;
//     console.log(result) ;
// }

// sum(1,2);



// let user={
//     name:1,
//     age:30,
// }

// for(let key in user){
//     console.log(user[key])
// }
// for(let value of Object.values(user)){
//     console.log(value);
// }
// let key="name"

// console.log(key in user)




// let user={
//     name:"ravi",
// }


// let user2=Object.assign({},user);
// user2.name="rohit";
// console.log(user2.name)




// let user={
//     name:'ravi',
//     age:21,
//     address:{
//         city:'jaipur',
//         state:'rajasthan',
//     },
//      sayhi(){
//         console.log(user.name);
//     }
//  }
// let user2=structuredClone(user);
// // console.log(user===user2)
// user2.address.city="udaipur";
// console.log(user.address.city)

// user.sayhi()



// let now=new Date(2024,10,30,0,0,0)
// console.log(now.getTime())


// let date=new Date("2024-11-02T11:12:13.102Z");
// date=(date.getTime())-19800000
//  date=new Date(date)
// console.log(date.toString())

// console.log(date.toString())






// let now=new Date("2007-1-26")
// console.log(now.getDay().toString())

// let now=new Date();
// now.setHours(0)
// console.log(now.toString())
// (now.setHours(0,0,0,0))


// let date=new Date(2024,1,2);
// date.setDate(date.getDate()+2)
// console.log(date.toString())


// let str=new Date();

// for(let i=0;i<100000;i++)
// {
//     let DoSomthing=i*i*i;
// }

// let end=new Date();
// console.log(`the loop took ${end-str} ms`)


 

// let now=Date.now();
// let date=new Date();
// console.log(date.getTime())
// console.log(now)


// let user={
//     name:'ravi',
//     age:21,
//     isAdmin:false,
//     sayHi(){
//         console.log("hlo")
//     },
//     courses:['html','css','js'],
//     title:undefined
// }

// console.log(user.toString) 
// let json=JSON.stringify(user)
// console.log(json,"\n",typeof json)





// factorial of a number using recursion

// function factorial(num){
//     if(num==1){
//         return 1;
//     }
//     else{
//        return num*factorial(num-1)
//     }
// }

// console.log(factorial(5))



// sum of array elements 

// function sumArray(arr){
//    if(arr.length==0)
//    {
//     return 0;
//    }
//    else{
//     return arr[0]+sumArray(arr.slice(1))
//    }

// }
// console.log(sumArray([1,2,3,4,5]));




// let arr=["ravi",21]
// let arr1=['prajapat']
// let a=arr.splice(1,0,arr1[0])
//  console.log(arr)


// function sum(a){
//     return function(b){
//         return a+b;
//     }
    
// }
// console.log(sum(2)(3))



// let sum= new Function('a,b','return a+b');
// console.log(sum(1,2))


    // setTimeout(() => {
    //     function sum(a,b){
    //         return a+b;
    //     }
    //     console.log(sum(1,2))
    // }, 5000);




// console.log(tim)
// setTimeout(function(){
//     console.log(10)
//     console.log(new Date().getTime());
// },3000)



// const timer=setInterval(function(){
//     console.log((new Date()).getTime());
// },5000)

// setTimeout(() => {
//     clearInterval(timer)
// }, 15000);



// let user={
//     name:'ravi',
//     age:21,
// }

// Object.defineProperty(user,'name',{
//     writable:false
// })

// user.name='sachin';
// user.age=40;
// console.log(user)




// const res={
//     status:200,
//     message:'usesr found',
//     data:{
//         name:"ravi",
//         age:30
//     }
// }
// const resStr=JSON.stringify(res);

// let result= new Promise((resolve,reject)=>{
//  setTimeout(() => {
//      const time=new Date().getTime();
//      if(time%2===0){
//          resolve(resStr)
//         // (`we get even number- ${time}`)
//      }
//      else{
//         reject(`we get odd number- ${time}`)

//      }
//  }, 1000);
// })


// result
// .then((res)=>JSON.parse(res))
// .then(res=>res?.data || {})
// .then(user=>console.log(user?.name))
// .catch(e=>console.log(e))





