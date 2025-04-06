// // async function listCats(){
 
     
     function listCats() {
         document.getElementById('myTable').style.display="block"
         fetch("https://api.thecatapi.com/v1/images/search?limit=10")
         .then(res=> res.json())
            
            .then(res=>{
                console.log(res)
                let tbl=document.querySelector('#myTable tbody');
                // tbl.style.width="80%"
                tbl.innerHTML=""
                res.forEach(cat => {
                    const row=document.createElement('tr');

                    const Id=document.createElement('td');
                    Id.textContent=cat.id;
                    row.appendChild(Id)

                    const image=document.createElement('td');
                    const imgTag=document.createElement('img')
                    imgTag.src=cat.url;
                    imgTag.style.width="200px"
                    imgTag.style.height="200px";
                    image.appendChild(imgTag)
                    row.appendChild(image)


                    const Width=document.createElement('td');
                    Width.textContent=cat.width;
                    row.appendChild(Width)

                    const Height=document.createElement('td');
                    Height.textContent=cat.height;
                    row.appendChild(Height)

                    tbl.appendChild(row)
                });
            })
               
        .catch(e=>console.log("error" ,e))

    }
   

























// function listCats(){
//     fetch("https://api.thecatapi.com/v1/images/search?limit=10")
//     .then(res=>res.json())
//     .then(res=>{
//         console.log(res)
//         let container=document.getElementById("item");
//         // if(!container){
//         //     container=document.createElement("div");
//         //     container.id="item"
//         //     document.body.appendChild(container)
//         // }
//         container.innerHTML="";
//         const table=document.createElement("table");
//         table.style.width="80%";
//         table.style.margin='20px auto';
//         // table.style.borderCollapse="collapse"
//         table.style.backgroundColor="#f9f9f9"
//         const thead=document.createElement("thead")
//         thead.innerHTML=`<tr style="background-color:#333;color:#fff";>
//             <th style="border:1px solid #ddd; padding:10px;">ID<th>
//             <th style="border:1px solid #ddd; padding:10px;">Images<th>
//             <th style="border:1px solid #ddd; padding:10px;">width<th>
//             <th style="border:1px solid #ddd; padding:10px;">height<th>
//             </tr>

//         `;
//         table.appendChild(thead)
//         const tbody=document.createElement("tbody");
//         res.forEach(cat => {
//             const row=document.createElement("tr");
//             row.innerHTML=`<td style="border:1px solid #ddd; padding:10px;text-align:center;">${cat.id}<td>
//             <td style="border:1px solid #ddd; padding:10px;text-align:center;">
//                 <img src="${cat.url}" alt="cat" style="width:100px; height:100px;"/>
//             <td>
//             <td style="border:1px solid #ddd; padding:10px;text-align:center;">${cat.width}<td>
//             <td style="border:1px solid #ddd; padding:10px;text-align:center;">${cat.height}<td>` 
//             tbody.appendChild(row)
//         })
//         table.appendChild(tbody);
//         document.body.appendChild(table)
//     })
//     // 
//     .catch(e=>console.log("error" ,e))
// }
























// function listCats(){
// // url=;
// fetch("https://api.thecatapi.com/v1/images/search?limit=10")
// .then(res=>res.json())


// .then(res=>{
//     console.log(res)
   
//     let cons=[];
    
//         var container=document.getElementById('item');
//         container.innerHTML=""
//       res.forEach(cat => {
//         let img=document.createElement("img")
//         img.src=cat.url
//         img.id=cat.id
//         img.width=cat.width
//         img.style.width="200px"
//         img.style.height="200px"
//         img.style.display="block"
//         // cons.push(img)
//         container.appendChild(img) 
    
//     //     var ids=document.getElementById('ids');
//     //     // ids.innerHTML=""
//     //   res.forEach(cat => {
//     //     let img=document.createElement("img")
//     //     // img.src=cat.url
//     //     img.id=cat.url
//     //     img.style.width="200px"
//     //     img.style.height="200px"
//     //     img.style.display="block"
//     //     // cons.push(img)
//     //     ids.appendChild(img)
//     //   })
//     }); 
//         // container=(cons)
//         // document.body.appendChild(container)
//         // console.log(cons)
   
// })
// .catch(function(e){
//     console.log(e)
// })
// }
// // listCats()


// // function display_image(imd_url){
// //         document.getElementById('item').src="https://cdn2.thecatapi.com/images/qr.jpg"
// //         document.getElementById('item').src="https://cdn2.thecatapi.com/images/42p.jpg"
// //     }
    
