// var all
function list(){
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(res=>
        {
            console.log(res)
            var data=document.getElementById('item');
            var d=document.getElementById('ti')
            var b=document.getElementById('bo')
            data.innerHTML="";
       
        res.forEach(titl => {
            // const blogPost=document.createElement('div');
            // var a=document.createElement('a');
            // var p=document.createElement('p');
            // var Id=document.createElement('id')
            // Id.textContent=titl.id
            // a.href=titl.title;
            d.textContent=titl.title
            d.href="/learn_html/posts/untree.co-blogy/single.html?id="+titl.id
            d.style.display='block'
            // data.innerHTML="<br><br>"
            b.textContent=titl.body
            data.appendChild(d)
            data.appendChild(b) 
            // data.appendChild(blogPost)
            // return titl;
            // all=titl.id
            // return Id
        });
        // let discription=document.getElementById('dis');
        // res.forEach(el=>{
            //     let a=document.createElement('a');
            //     let p=document.createElement('p');
            //     // a.href=el.title;
            //     a.textContent=el.title
            //     discription.appendChild(a)
            // }
            // )
            
        })
        // .catch(e=>console.log(e))
    }
    list()

    //  function dist(){
      
//          fetch("https://jsonplaceholder.typicode.com/posts/")
//          .then(res1=>res1.json())
//          .then(res1=>
//             {
//                 console.log(res1)
//                 let discription=document.getElementById('dis');

//                 res1.forEach(titl1 => {
//     if(titl1.id==Id)
//     {
//     let a=document.createElement('a');
//     let p=document.createElement('p');
//     // let u=document.createElement('p')
//     a.href=titl1.title;
//     // u.textContent=res.id
//     a.textContent=titl1.title
//     p.textContent=titl1.body
//     discription.appendChild(a)
//     discription.appendChild(p)

// }
//     // discription.appendChild(u)
// })
// }
// )
// //  }



// }

