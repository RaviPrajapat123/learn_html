function show(value){
   const result= document.getElementById('result');
         result.value+=value;
        // result.value=result.value+value
    
   
}

function operation(value)
{
    
    const result= document.getElementById('result');
    result.value+=value;
    

}
// console.log(Number(1)+Number(2+3))
function cal()
{
    const result=document.getElementById('result');
    // result.value=eval(result.value); 
    function add(a,b)
    {
        // result.value= ( Number(a)+ Number(b)); 
        let my=part.filter((item)=> ! ops.includes(item)).map(Number).reduce((acc,num) => acc+num,0);
     console.log(my)
    result.value=my

        
    }
    function sub(a,b)
    {
     
        let my=part.filter(item=> ! ops.includes(item)).map(Number).reduce((acc,num) =>{  if(acc===0){
            return acc+num
        }
        else{
        return acc-num }},0);
        
     console.log(my.toFixed(2))
    result.value=my.toFixed(2)
    }
    function mul(a,b)
    {
        // result.value=  ( Number(a) *Number(b)).toFixed(2);
        let my=part.filter(item=> ! ops.includes(item)).map(Number).reduce((acc,num) =>{  if(acc===0){
            return acc++;
        }
        else{
        return acc*num }},0);
        console.log(my.toFixed(2))
    result.value=my.toFixed(2)
    }
    function rem(a,b)
    {
        result.value=  ( Number(a)%Number(b)).toFixed(2);
    }
    function div(a,b)
    {
        // try{
        // if((Number(a)/Number(b))==Infinity)
        // {
        //     throw new Error("enter the correct value")
        // }
        // else{
            result.value=  ( Number(a)/Number(b)).toFixed(2);
    //     }
    //    }
    //     catch(e){
    //         return(e.message)
    //     }
    }
    
    function calculate(a,b,callback)
    {
        return callback(a,b);
    }
    
    let equation=result.value;
    // while(!equation.length==1){
    
     let part=[];
     let pos=0;
     let ops=['+','-'];

     // eq = "1+2+3"
    

    for(let i = 0; i< equation.length; i++) {
        
        if(ops.includes(equation[i])) {
            pos++;
        }


        if(part[pos] == undefined) part[pos] = ""

        part[pos] += equation[i];

        if(ops.includes(equation[i])) {
            pos++;
        }
    }
 
    console.log(part);
    // const inti=0;
//      const my=part.filter(function (acc,cu){
//         if(ops.includes(part[acc]))
//         {
           
//         }
//         else{
//         // inti++;
//         return acc+cu
//     }
//         // return Number(acc)+Number(cu)
// },0)



    
    // let b=[];
    // let a=[];
    // for(let i=0;i<equation.length;i++)
    // {
    //     if(ops.includes(part[i]))
    //     {
    //         b.push(part[i])
    //     }
    //     else{
    //         a.push(Number(part[i]))
    //     }
    // }
    // let total=a.reduce((h1,h2,index)=>{
    //     if(index===0) return h2;
    //     let op= b[index-1];
    
    
    let a=part[0];
    let b=part[2];
    let c=part[1];
    let callback;
    switch(c){
        case "+" :callback=add;
            // return h1+h2;
             
        break;
        case "-" :
            // return h1-h2;
             callback=sub;
        break;
        case "*" : callback=mul;
        break;
        case "/": callback=div;
        
        break;
                    break;
        case "%": callback=rem;
        
        break;
    }
//    },0)
    
   calculate(a,b,callback)
//    result.value=total;
}

// }

try{
function clearr(){
    document.getElementById('result').value='';
    
}
}
catch(e){
    result.value='Error';
}



//   ["1","+","2","+","3"]


    // return


    //  for(let i=0 ;i<=equation.length;i++)
    //     {
    //         if('+'==equation[i] || '-'==equation[i] || '*'==equation[i] || '/'==equation[i] || '%'==equation[i])
    //         {
    //             part[1]=equation[i];
    //             break;
    //         }
    //         else{
    //             if(part[0]==undefined)
    //             {
    //                 part[0]='';
    //             }
    //             part[0]+=equation[i];
    //             pos++;
    //         }
    //     }
    //         for(let i=pos+1;i<equation.length;i++)
    //         {
    //             if(part[2]==undefined)
    //             {
    //                 part[2]='';
    //             }
    //             part[2]+=equation[i];
    //         }
   
    //         console.log("part[0]= "+part[0]+ "\n", "part[1]= "+part[1]+"\n", "part[2]= "+part[2])

    
    // result.value=part




    // let a=[12,34,'*','+',2,"+"]
    // let op=['+','-','*'];
    // let b=[]
    // let o=[]
    // let total=a.filter((item)=>
    //     {
    //  if(op.includes(item)){
    //     // return o.push(a[item])
    //  }
    //  else{
    //  return b.push(a[item])
    //  }
    // })
    // let total1=a.filter((item)=>
    //     {
    //  if(op.includes(item)){
    //     return o.push(a[item])
    //  }
    // //  else{
    // //  return b.push(a[item])
    // //  }
    // })
    // console.log(total)
    // console.log(total1)