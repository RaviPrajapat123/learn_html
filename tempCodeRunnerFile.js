function add(a,b){
    return "sum= "+ ( Number(a)+ Number(b));
}
function sub(a,b){
    return "sub= "+ ( Number(a)- Number(b)).toFixed(2);
}
function mul(a,b){
    return "mul= "+ ( Number(a) *Number(b)).toFixed(2);
}
function div(a,b){
    try{
    if((Number(a)/Number(b))==Infinity)
    {
        throw new Error("enter the correct value")
    }
    else{
    return "div= "+ ( Number(a)/Number(b)).toFixed(2);
    }
   }
    catch(e){
        return(e.message)
    }
}

function calculate(a,b,callback)
{
    return callback(a,b);
}

let equation="1+2";

 let part=[];
 let pos=0;
 let ops=['+','-'];
for(let i=0;i<=equation.length;i++)
{
     if(ops.includes(equation[i]) || ops.includes(part[pos]))
     {
        pos++;
     }
     if(part[pos]==undefined)
     {
        part[pos]=" ";
        part[pos]+=equation[i];
     }

}
console.log(part[2])