// function dis(){
    var query_string=window.location.search;
    var urlParmsArr= new URLSearchParams(query_string);
    var id=urlParmsArr.get('id')
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

// .then(res=>res.json())
// .then(titl=>
// {
//     console.log(titl)

// // let discription=document.getElementById('dis');


// console.log(id)
// //  res.forEach(titl => {
//     // if(titl.id==id)
//     {
        async function fetchBlogs() {
            // try {
                const response = await fetch(apiUrl);
                const blogs = await response.json();
                console.log(blogs)

        const anchor=document.getElementById('dis');
        const userid=document.getElementById('userId')
        const id=document.getElementById('id')
        const title=document.getElementById('title')
        const body=document.getElementById("body")
        // const para=document.querySelectorAll('#param')
        // anchor.forEach((pa,index) => {
            // anchor.textContent=id?.title||"Default updated content"
        //    a.href="/learn_html/posts/untree.co-blogy/single.html?id="+blogs[index]?.id
        
 
        // });
        // para.forEach((pra,index) => {
        //     pra.textContent=blogs[index]?.body||"Default updated content"
        //    a.href="/learn_html/posts/untree.co-blogy/single.html?id="+blogs[index]?.id


        // });

        // var h1=document.createElement('h1');
        // var p=document.createElement('p');
        // // var Id=document.createElement('id')

         anchor.textContent= blogs.title
         userid.textContent=blogs.userId
         id.textContent=blogs.id
         title.textContent=blogs.title
         body.textContent=blogs.body
        // a.href=titl.title;
        // a.textContent=titl.title
        // a.href="discription.html?id="+titl.id
        // p.textContent=titl.body
        // anchor.appendChild(h1)
        // discription.appendChild(p)
    }
    // discription.appendChild(u)
// })
fetchBlogs()
// }
// )
// }

function comments(){
    var query_string=window.location.search;
    var urlParmsArr= new URLSearchParams(query_string);
    var id=urlParmsArr.get('id')
    // console.log(id)
fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
.then(res=>res.json())
.then(titl=>
{
    console.log(titl)

let discription=document.getElementById('contiue');


console.log(id)
        titl.forEach(comments => {
            
       
            // discription.textContent=comments.name
            // discription.textContent=comments.body
            // var a=document.createElement('a')
            // a.href="/learn_html/posts/untree.co-blogy/single.html?id="+comments.id

        var postId=document.createElement('p');
        var Id=document.createElement('p');
        var name=document.createElement('p');
        var email=document.createElement('p');
        var body=document.createElement('p');
        // var Id=document.createElement('span')
        postId.textContent='"postId" : ' +comments.postId
        Id.textContent='"Id": '+comments.id
        name.textContent='"name": '+comments.name
        email.textContent='"email": '+comments.email
        body.textContent='"body": '+comments.body
        // a.href=comments.name;
        // a.textContent=comments.name
        // a.href="discription.html?id="+titl.id
        // p.textContent=comments.body
        discription.appendChild(postId)
        discription.appendChild(Id)
        discription.appendChild(name)
        discription.appendChild(email)
        discription.appendChild(body)
        // discription.appendChild(a)
        // discription.style.borderBottom="2px solid black"
        // discription.appendChild(p)
    });
        // discription.appendChild(Id)
    }
    // discription.appendChild(u)
)}

comments()