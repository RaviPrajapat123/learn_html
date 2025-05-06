let input1=[{type:"text",placeholder:"name",userHeader:true},{type:"text",placeholder:"fname",userHeader:true}]

const[placeholder]=input1.map(v=>{
    if(v.userHeader)
    {
        // return v
        // console.log(v.userHeader)
        v
    }
})
console.log(placeholder)