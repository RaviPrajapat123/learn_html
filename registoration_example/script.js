let inputs = [
    { type: "text", placeholder: "Name", name: "name", value: "",use_header:true },
    { type: "text", placeholder: "Email", name: "email", value: "",use_header:true },
    { type: "date", placeholder: "Age", name: "age", value: "",use_header:true },
    // { type: "text", placeholder:"fatherName", name: "submit", value: "" },
    { type: "submit", placeholder:"", name: "submit", value: "Submit" }
  ];
  
const container = document.getElementById("container");
const formshow=document.createElement("form")
formshow.style.width="40%"
formshow.style.display="flex"
formshow.style.flexDirection="column"
formshow.style.alignItems="center"
formshow.style.border="2px solid black"
const header=document.createElement("h1")
header.style.margin="20px 0px"
// header.style.textAlign="center"
header.innerHTML="Registration Form"

formshow.prepend(header)
container.appendChild(formshow)
function CreateForm() {

  inputs.forEach((v) => {
      const input = CreateInputs(v);
      formshow.appendChild(input);
  });
}

function CreateInputs({ type, placeholder, name, value, ...rest }) {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.name = name;
  input.value = value;
  input.style.width="30vw"
  input.style.margin = "10px";
  input.style.padding = "5px";
  input.style.display = "block";

  return input;
}


CreateForm();





function CreateTable(){

    let table=document.createElement("table")
    let thead=document.createElement("thead")
    let headerRow=document.createElement("tr")
    let header=["s.no","name","email","age","action"]

    header.forEach((v)=>{
        let th=document.createElement("th")
        th.textContent=v
        th.style.border="2px solid black"
        headerRow.appendChild(th)
    })
        thead.appendChild(headerRow)
        table.appendChild(thead)

        const tbody=document.createElement("tbody")
        table.appendChild(tbody)
        let serial=1
        formshow.addEventListener("submit",function(e){
            e.preventDefault()
            let name=formshow.querySelector("input[name='name']")
            let email=formshow.querySelector("input[name='email']")
            let age=formshow.querySelector("input[name='age']")

            if(name.value==""){
                alert("name is required")
                return
            }
            let data={
                name:name.value,
                email:email.value,
                age:age.value
            }

            let tr=document.createElement("tr")
                tr.style.textAlign="center"
            const serialno=document.createElement("td")
            serialno.textContent=serial++
            serialno.style.border="2px solid black"
            tr.appendChild(serialno)

            Object.values(data).forEach((v)=>{
                const td=document.createElement("td")
                td.textContent=v
                td.style.border="2px solid black"
                tr.appendChild(td)
            })
            const actionbtn=document.createElement("td")
            actionbtn.style.border="2px solid black"
            const btn=document.createElement("button")
            btn.innerHTML="Delte"
            btn.onclick=function(){
                
                tbody.removeChild(tr)
            }
            // const edtbtn=document.createElement("td")
            const btnedit=document.createElement("button")
            btnedit.innerHTML="Edit"
            btnedit.onclick=function(){
                name.value=data.name
                email.value=data.email
                age.value=data.age
            }
            actionbtn.appendChild(btnedit)
    
            actionbtn.appendChild(btn)
            tr.appendChild(actionbtn)
            tr.appendChild(btnedit)
            tbody.appendChild(tr)
            formshow.reset()
            console.log(data)
        })


        container.appendChild(table)
}
CreateTable()



