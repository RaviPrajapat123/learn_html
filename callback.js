
function calculate(opr1,opr2,callback){
    try{
        
    if(!opr1 || !opr2 || !callback)
    {
        // if(opr1==0 ||opr2==0)
        //     {
                 
        //     }
        //     else{
        //     throw new Error("please enter the valid parameters-1");
        //     }
          
    }
    let callpara=[sum,sub,mul,div,rem];
    if(callpara.includes(callback))
    {

    }
    else{
        throw new Error("please enter valid function name")
    }
    return callback(opr1,opr2)
}
catch(e){
    console.log(e.message)
}

}

function sum(a,b){

    try{

        // if(!a||!b)
        //     {
             
        //     }
        if(!Number(a)||!Number(b))
            {
                if(a==0 || b==0)
                    {
                         
                    }
                    else{
            throw new Error("please enter the valid parameter-3")
                    }
        }
       
        if(a===''||b===''||a===" "||b===" ")
            {
                throw new Error("its not a valid ")
         }
    let result= Number(a)+Number(b);
    // if(parseInt(a)!=a || parseInt(b)!=b)
    // {
    //    throw new Error("invalid result, enter the valid parameter")
    // }
    if(result<0)
    { 
        throw new Error("Invalid Result,output is negative")
    }
   if(result%1!=0)
    {
        throw new Error("Invalid result,the ouput is floating number")
     }
     
     console.log(result);
    }
    catch(e){
       console.log(e.message);
    }

} 
function sub(a,b){

    try{

        // if(!a||!b)
        //     {
             
        //     }
        if(!Number(a)||!Number(b))
            {
                if(a==0 || b==0)
                    {
                         
                    }
                    else{
                          throw new Error("please enter the valid parameter-3")
                    }
        }
       
        if(a===''||b===''||a===" "||b===" ")
            {
                throw new Error("its not a valid ")
         }
    let result= Number(a)-Number(b);
    // if(parseInt(a)!=a || parseInt(b)!=b)
    // {
    //    throw new Error("invalid result, enter the valid parameter")
    // }
    if(result<0)
    { 
        throw new Error("Invalid Result,output is negative")
    }
   if(result%1!=0)
    {
        throw new Error("Invalid result,the ouput is floating number")
     }
     
     console.log(result);
    }
    catch(e){
       console.log(e.message);
    }

} 
 
function mul(a,b){

    try{

        // if(!a||!b)
        //     {
             
        //     }
        if(!Number(a)||!Number(b))
            {
                if(a==0 || b==0)
                    {
                         
                    }
                    else{
                          throw new Error("please enter the valid parameter-3")
                    }
        }
       if(a===''||b===''||a===" "||b===" ")
       {
           throw new Error("its not a valid ")
    }
    let result= Number(a)*Number(b);
    // if(parseInt(a)!=a || parseInt(b)!=b)
    // {
    //    throw new Error("invalid result, enter the valid parameter")
    // }
    if(result<0)
    { 
        throw new Error("Invalid Result,output is negative")
    }
   if(result%1!=0)
    {
        throw new Error("Invalid result,the ouput is floating number")
     }
     
     console.log(result);
    }
    catch(e){
       console.log(e.message);
    }

} 

function div(a,b){

    try{

    if(!a||!b)
   {
    //  if(a===0 ||b===0)
    //    {
            
    //    }
    //    else{
    // throw new Error("Invalid Result,please enter the parameters");
    //    }
    
}
if(isNaN(a)||isNaN(b) || a===" " || b===' ' || a==="" || b===''){
    throw new Error("please enter the valid paramerter")
}
let result= Number(a)/Number(b);
       

    if(result==Infinity){
        throw new Error('infinite')
    }
   
    if(result<0)
    { 
        throw new Error("Invalid Result,output is negative")
    }
   if(result%1!=0)
    {
        throw new Error("Invalid result,the ouput is floating number")
     }
     
     console.log(result);
    }
    catch(e){
       console.log(e.message);
    }
   
} 
function rem(a,b){

    try{

    if(!a||!b)
   {
     if(a===0 ||b===0)
       {
            
       }
       else{
    throw new Error("Invalid Result,please enter the parameters");
       }
    
}
if(isNaN(a)||isNaN(b) || a===" " || b===' ' || a==="" || b===''){
    throw new Error("please enter the valid paramerter")
}
let result= Number(a)%Number(b);
       

    if(result==Infinity){
        throw new Error('infinite')
    }
   
    if(result<0)
    { 
        throw new Error("Invalid Result,output is negative")
    }
   if(result%1!=0)
    {
        throw new Error("Invalid result,the ouput is floating number")
     }
     
     console.log(result);
    }
    catch(e){
       console.log(e.message);
    }
   
} 

try{
    //  calculate({},{user},sum)
    //  calculate(1," ",sub)
    //  calculate(5,1,mul)
    calculate(0,$,console.log())
    calculate(11,' ',rem)
}
catch(e){
    console.log("enter the valid Parameters")
} 


// calculate(3.20,1.2,sub)
// calculate("",0.25,mul)
// calculate(10.50,-550,div)
//   calculate(11,-2,rem) 













// function sub(a,b){
//    try{
//     //  if(!Number.isInteger(a) || !Number.isInteger(b)){
//     //     throw new Error('inputs must be Integer number');
//     // }   
//     if((a-b)>=0 && (a-b)%1===0){
//         let sub=a-b;
//         console.log(`${a}-${b}= ${sub}`);
//     }
//     else{
//         throw  new Error("the output is negative")
//     }
//      }
//     catch(e){
//        console.log(a-b,e.message);
//     }
   
// }
// function mul(a,b){
//    try{
//     //  if(!Number.isInteger(a) || !Number.isInteger(b)){
//     //     throw new Error('inputs must be Integer number');
//     // }   
//     if((a*b)%1==0 && (a*b)>=0){
//         let mul=a*b;
//         console.log(`${a}*${b}= ${mul}`);
//     }
//     else{
//         throw  new Error("the output is negative")
//     }
//      }
//     catch(e){
//        console.log(a*b,e.message);
//     }
   
// }
// function div(a,b){
//    try{
//      if(!Number.isInteger(a) || !Number.isInteger(b)){
//         throw new Error('inputs must be Integer number');
//     }   
//     if((a/b)>0 && (a/b)%1==0){
//         let div=(a/b);
//         console.log(`${a}/${b}= ${div}`);
//     }
//     else{
//         throw  new Error("the output is negative")
//     }
//      }
//     catch(e){
//        console.log(a/b,e.message);
//     }
   
// }
// function rem(a,b){
//    try{
//     //  if(!Number.isInteger(a) || !Number.isInteger(b)){
//     //     throw new Error('inputs must be Integer number');
//     // }   
//     if((a%b)>=0 && (a%b)%1===0){
//         let rem=a%b;
//         console.log(`${a}%${b}= ${rem}`);
//     }
//     else{
//         throw  new Error("the output is negative")
//     }
//      }
//     catch(e){
//        console.log(a%b,e.message);
//     }
   
// }
