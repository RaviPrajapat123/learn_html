 let a=[12,34,'*','+',2,"+"]
    let op=['+','-','*'];
    let b=[]
    let o=[]
    let total=a.filter((item)=>
        {
     if(op.includes(item)){
        // return o.push(a[item])
     }
     else{
     return b.push(a[item])
     }
    })
    let total1=a.filter((item)=>
        {
     if(op.includes(item)){
        return o.push(a[item])
     }
    //  else{
    //  return b.push(a[item])
    //  }
    })
    console.log(total)
    console.log(total1)