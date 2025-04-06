// API URL (example: a placeholder API for blogs)
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// Function to fetch blog data
async function fetchBlogs() {
    // try {
        const response = await fetch(apiUrl);
        const blogs = await response.json();
        console.log(blogs)
        const anchor=document.querySelectorAll('#item');
        const para=document.querySelectorAll('#param')
        const continu=document.querySelectorAll("#contiue")
        anchor.forEach((a,index) => {
            a.textContent=blogs[index]?.title||"Default updated content"
           a.href="/learn_html/posts/untree.co-blogy/single.html?id="+blogs[index]?.id

           
        });
        para.forEach((pra,index) => {
            //    a.href="/learn_html/posts/untree.co-blogy/single.html?id="+blogs[index]?.id
            pra.textContent=blogs[index]?.body||"Default updated content"


        });
        continu.forEach((pra,index) => {
            //    a.href="/learn_html/posts/untree.co-blogy/single.html?id="+blogs[index]?.id
            // pra.textContent=" "
            pra.href="/learn_html/posts/untree.co-blogy/single.html?id="+blogs[index]?.id


        });
        }
        fetchBlogs()

// Function to display blogs
// function displayBlogs(blogs) {
//     const container = document.getElementById("item");
//     container.innerHTML = ""; // Clear loading message

//     blogs.slice(0, 10).forEach(blog => {
//         // Create blog post element
//         const blogPost = document.createElement("div");
//         blogPost.className = "blog-post";
        

//         // Add title
//         const title = document.createElement("h2");
//         title.className = "blog-title";
//         title.textContent = blog.title;

//         // Add date (Placeholder for demo, real API may include a date field)
//         const date = document.createElement("p");
//         date.className = "blog-date";
//         date.textContent = new Date().toLocaleDateString();

//         // Add content
//         const content = document.createElement("p");
//         content.className = "blog-content";
//         content.textContent = blog.body;

//         // Append elements to blog post
//         blogPost.appendChild(title);
//         blogPost.appendChild(date);
//         blogPost.appendChild(content);

//         // Append blog post to container
//         container.appendChild(blogPost);
//     });
// }

// // Fetch and display blogs on page load
// fetchBlogs();