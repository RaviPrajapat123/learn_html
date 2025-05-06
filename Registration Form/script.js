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
  const tableContainer=document.createElement("div")
  tableContainer.style.width="40vw"
  tableContainer.style.height="auto"
  tableContainer.style.border="2px solid black"


  const table = document.createElement("table");

  table.style.borderCollapse = "collapse";
  table.style.margin = "20px auto";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  
  const header=["s.no","name","email","age","action"]
  

    header.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key.toUpperCase();
    th.style.border = "1px solid black";
    th.style.padding = "10px";
    th.style.backgroundColor = "#000";
    // th.style.height="30px"
    th.style.color="#fff";
    
    headerRow.appendChild(th);
  });

  const tbody=document.createElement("tbody")


  thead.appendChild(headerRow);
  table.appendChild(thead);
  table.appendChild(tbody)
  tableContainer.appendChild(table)
  container.appendChild(tableContainer)
  let serial=1
  let mul =[]
  formshow.addEventListener("submit", function (e) {
    e.preventDefault();
    let name=formshow.querySelector("input[name='name']")
    let email=formshow.querySelector("input[name='email']")
    let age=formshow.querySelector("input[name='age']")
    // if((name.value && email.value && age.value)=="")
    // {
    //   alert("all fields are require")
    //   return
    // }
    const data = {
      name: name.value,
      email: email.value,
      age: age.value
    };
  
    const tr = document.createElement("tr");
  
    const tdSerial = document.createElement("td");
    tdSerial.textContent = serial++;
    tdSerial.style.border = "1px solid black";
    tdSerial.style.padding = "10px";
    tr.appendChild(tdSerial);
  
  
    Object.values(data).forEach(value => {
      const td = document.createElement("td");
      td.textContent = value;
      td.style.border = "1px solid black";
      td.style.padding = "10px";
      tr.appendChild(td);
    });
    
    //  mul=[]
    mul.push(data)

    const tdAction = document.createElement("td");
    tdAction.style.display="flex"
    tdAction.style.gap="5px"
    tdAction.style.border = "1px solid black";
    tdAction.style.padding = "10px";
  
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.backgroundColor="black"
    delBtn.style.color="white"
    delBtn.style.padding="2px 5px"
    delBtn.style.border="none"
    delBtn.style.cursor = "pointer";
    delBtn.addEventListener("click", () => {
      tbody.removeChild(tr);
      // console.log("serial",serial)
      // let d=mul.slice((serial-1),1)
      // // // serial--
      // console.log("d",d)
      // mul.map((v)=>console.log(v))
    });
  
      const editBtn=document.createElement("button")
      editBtn.textContent="Edit"
      editBtn.style.backgroundColor="black"
      editBtn.style.color="white"
      editBtn.style.padding="2px 5px"
      editBtn.style.border="none"
      editBtn.style.cursor = "pointer";
      tdAction.appendChild(delBtn);
      tdAction.appendChild(editBtn)
    tr.appendChild(tdAction);
  
    tbody.appendChild(tr); 
    formshow.reset();
    console.log(data)
    console.log(mul)
  });
  
}

CreateTable()










