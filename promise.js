// callback hell

// function getData(dataId,getNextdata){
//     setTimeout(() => {
//         console.log('data',dataId);
//         if(getNextdata)
//         getNextdata()
        
//     }, 2000);
// }

// getData(1,()=>getData(2,()=>getData(3)))

let promise=new Promise((resolve,reject) =>{
    console.log('i am promise')
    reject("some")
})
console.log(promise)