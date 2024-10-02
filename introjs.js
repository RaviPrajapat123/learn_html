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


let num=prompt("enter a number=")

for(let i=2;i<=num;i++)
{   
    let a=1;
    for(let j=2;j*j<=i;j++)
    {
        if(i%j==0)
        {
            a=0;
           
        }
    }
    if(a==1){
        alert(i);
    }
}


