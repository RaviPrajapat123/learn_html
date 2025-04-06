function add(a,b){
    return "sum= "+ ( Number(a)+ Number(b));
}
function sub(a,b){
    return  ( Number(a)- Number(b)).toFixed(2);
}
// function mul(a,b){
//     return "mul= "+ ( Number(a) *Number(b)).toFixed(2);
// }
// function div(a,b){
//     try{
//     if((Number(a)/Number(b))==Infinity)
//     {
//         throw new Error("enter the correct value")
//     }
//     else{
//     return "div= "+ ( Number(a)/Number(b)).toFixed(2);
//     }
//    }
//     catch(e){
//         return(e.message)
//     }
// }


function calculate(a,b,callback)
{
    return callback(a,b);
}

let equation="5.2-7";

 let part=[];
 let pos=0;
 let ops=['+','-'];
for(let i=0;i<=equation.length;i++)
{
    if('+'==equation[i] || '-'==equation[i])
    {
        part[1]=equation[i];
        break;
    }
    else{
        if(part[0]==undefined)
        {
            part[0]='';
        }
        part[0]+=equation[i];
        pos++;
    }
}
    for(let i=pos+1;i<equation.length;i++)
    {
        if(part[2]==undefined)
        {
            part[2]='';
        }
        part[2]+=equation[i];
    }
    //  if(ops.includes(equation[i]) || ops.includes(part[pos]))
    //  {
    //     pos++;
    //  }
    //  if(part[pos]==undefined)
    //  {
    //     part[pos]="";
    //     part[pos]+=equation[i];
    //  }


// console.log(part[2])


console.log("part[0]= "+part[0]+ "\n", "part[1]= "+part[1]+"\n", "part[2]= "+part[2])

let a=part[0];
let b=part[2];
let c=part[1];
let callback;
switch(c){
    case "+" : callback=add;
                    break;
    case "-" : callback=sub;
                break;
    // case "*" : callback=mul;
    //             break;
    // case "/": callback=div;

    // break;
}


console.log(calculate(a,b,callback))