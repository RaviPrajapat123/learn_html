const header = document.createElement("h1")
header.innerHTML = "Todo List";
header.style.textAlign="center"
header.style.marginTop="20px"
header.style.fontSize="40px"
const container = document.createElement("div")
container.style.width = "100%"
// document.body.style.backgroundColor="#f5f5df"
document.body.style.backgroundImage="url('todolist_bg.jpg')"
document.body.style.backgroundSize="cover"
document.body.style.backgroundPosition="center"
// document.body.style.color="white"
document.body.style.height="96vh"
// document.body.style.objectFit="cover"
container.style.height = "auto"
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.justifyContent = "center"
container.style.alignItems = "center"
// container.appendChild(header)

const results=document.createElement("div")
results.style.width="100%"
results.style.display = "flex"
results.style.direction="rows"
results.style.justifyContent="center"
results.style.alignItems="center"
results.style.gap = "25px" 
results.style.marginBottom="10px"
const allCompleteTask=document.createElement("p")
allCompleteTask.style.width="auto"
allCompleteTask.style.height="40px"
allCompleteTask.style.border="2px solid black"
allCompleteTask.innerHTML="AllTask: 0"
allCompleteTask.style.display="flex"
allCompleteTask.style.justifyContent="center"
allCompleteTask.style.alignItems="center"
allCompleteTask.style.padding="1px 5px"
allCompleteTask.style.backgroundColor="#000"
allCompleteTask.style.fontWeight="bold"
allCompleteTask.style.color='white'
allCompleteTask.style.cursor="pointer"
let bool=true
allCompleteTask.onclick=function(){
    // const msg=document.createElement("p")
    // msg.innerHTML="All List"
    // container.appendChild(msg)
    // if(bool){

        allCompleteTask.style.backgroundColor="white"
        allCompleteTask.style.color="black"
        uncompleted.style.backgroundColor="black"
        uncompleted.style.color="white"
        completed.style.backgroundColor="black"
        completed.style.color="white"
        deleted.style.backgroundColor="black"
        deleted.style.color="white"
    // }
    // else{
    //     allCompleteTask.style.background="black"
    //     allCompleteTask.style.color="white"

    // }
    // bool=!bool
    container.appendChild(cloneUncom)
    container.appendChild(cloneCom)
    container.appendChild(cloneDel)
    //  input.style.display="inline"
    // addButton.style.display="inline"
}
results.appendChild(allCompleteTask)

const uncompleted=document.createElement("p")
uncompleted.style.width="auto"
uncompleted.style.height="40px"
uncompleted.style.border="2px solid black"
uncompleted.innerHTML="Incompleted: 0"
uncompleted.style.display="flex"
uncompleted.style.justifyContent="center"
uncompleted.style.alignItems="center"
uncompleted.style.padding="1px 5px"
uncompleted.style.backgroundColor="black"
uncompleted.style.fontWeight="bold"
uncompleted.style.color='white'
uncompleted.style.cursor="pointer"
uncompleted.onclick=function(){
    // uncompletedTasks.style.backgroundColor="white"
         uncompleted.style.backgroundColor="white"
        uncompleted.style.color="black"
         allCompleteTask.style.backgroundColor="black"
        allCompleteTask.style.color="white"
        completed.style.backgroundColor="black"
        completed.style.color="white"
         deleted.style.backgroundColor="black"
        deleted.style.color="white"
    container.appendChild(cloneUncom)
    completedTasks.remove()
    deletedTasks.remove()
    //  input.style.display="none"
    // addButton.style.display="none"
    

}
results.appendChild(uncompleted)

const completed=document.createElement("p")
completed.style.width="auto"
completed.style.height="40px"
completed.style.border="2px solid black"
completed.innerHTML="Completed: 0"
completed.style.display="flex"
completed.style.justifyContent="center"
completed.style.alignItems="center"
completed.style.padding="1px 5px"
completed.style.backgroundColor="black"
completed.style.fontWeight="bold"
completed.style.color='white'
completed.style.cursor="pointer"
completed.onclick=function(){
    // uncompletedTasks.style.backgroundColor="white"
    uncompleted.style.backgroundColor="black"
    uncompleted.style.color="white"
         allCompleteTask.style.backgroundColor="black"
    allCompleteTask.style.color="white"
         completed.style.backgroundColor="white"
    completed.style.color="black"
         deleted.style.backgroundColor="black"
    deleted.style.color="white"
    container.appendChild(cloneCom)
    uncompletedTasks.remove()
    deletedTasks.remove()
    //  input.style.display="none"
    // addButton.style.display="none"

}
results.appendChild(completed)

const deleted=document.createElement("p")
deleted.style.width="auto"
deleted.style.height="40px"
deleted.style.border="2px solid black"
deleted.innerHTML="Deleted: 0"
deleted.style.display="flex"
deleted.style.justifyContent="center"
deleted.style.alignItems="center"
deleted.style.padding="1px 5px"
deleted.style.backgroundColor="black"
deleted.style.fontWeight="bold"
deleted.style.color='white'
deleted.style.cursor="pointer"
deleted.onclick=function(){
    uncompleted.style.backgroundColor="black"
    uncompleted.style.color="white"
     allCompleteTask.style.backgroundColor="black"
    allCompleteTask.style.color="white"
    completed.style.backgroundColor="black"
    completed.style.color="white"
     deleted.style.backgroundColor="white"
    deleted.style.color="black"
    container.appendChild(cloneDel)
    // input.style.display="none"
    // addButton.style.display="none"
    completedTasks.remove()
    uncompletedTasks.remove()
}
results.appendChild(deleted)

// container.appendChild(allCompleteTask)
// container.appendChild(uncompleted)
container.appendChild(results)
const AddTask = document.createElement("div")
AddTask.style.display = "flex"
AddTask.style.gap = "25px"
const input = document.createElement("input")
input.style.width = "300px"
input.style.height = "25px"
input.style.border="2px solid black"
input.placeholder = "enter your task"
input.style.padding = "4px 14px"
AddTask.appendChild(input)
const addButton = document.createElement("button")
addButton.innerHTML = "AddTask"
addButton.style.padding="2px 15px"
addButton.style.border="2px solid black"
addButton.style.borderRadius="5px"
addButton.style.backgroundColor="#1e2a38"
addButton.style.color="#fff"
addButton.style.cursor="pointer"
addButton.onclick = addList
const uncompletedTasks = document.createElement("div"); 
const completedTasks = document.createElement("div");   
const deletedTasks = document.createElement("div");     

const cloneAll=allCompleteTask
const cloneUncom=uncompletedTasks
const cloneCom=completedTasks
const cloneDel=deletedTasks

AddTask.appendChild(addButton)
container.appendChild(header)
container.appendChild(AddTask)
container.appendChild(uncompletedTasks);
container.appendChild(completedTasks);
container.appendChild(deletedTasks);

// let list = document.createElement("div")
// list.style.margin = "30px 0px 0px 0px"



function allTaskCount(){
    const count=uncompletedTasks.querySelectorAll(".lists").length
    const c1=completedTasks.querySelectorAll(".lists").length
    const c2=deletedTasks.querySelectorAll(".lists").length
    // console.log(count.length)
    allCompleteTask.innerHTML=`AllTask: ${count+c1+c2}`
}


function updateUncompletedCount(){
    const count=uncompletedTasks.querySelectorAll(".lists").length
    // const h=uncompleted.children
    uncompleted.innerHTML=`Incompleted: ${count}`
}

function updateCompletedCount(){
    const count=completedTasks.querySelectorAll(".lists").length
    completed.innerHTML=`Completed: ${count}`
}


function updateDeletedCount(){
    const count=deletedTasks.querySelectorAll(".lists").length
    deleted.innerHTML=`Deleted: ${count}`
}




function addList() {
    let tasktext=input.value.trim().toLowerCase()
    
    if(tasktext==="")
    {
        alert("Task cannot be empty")
        return;
    }
    let existingTasks =[
        ...completedTasks.querySelectorAll(".task-text"),
        ...uncompletedTasks.querySelectorAll(".task-text"),
        ...deletedTasks.querySelectorAll(".task-text"),
    
        ...allCompleteTask.querySelectorAll(".task-text")
    ];
    for (let task of existingTasks) {
        if (task.innerText.toLowerCase() === tasktext) {
            alert("Task already exists!");
            return;
        }
    }
    let items = document.createElement("div")
    items.style.display = "flex"
    //  items.style.height="20px"
    items.style.alignItems = "center"
    items.style.gap = "20px"
    items.style.margin = "20px 0px 0px 0px"
     items.style.border="2px solid black"
    items.style.width = "500px"
    items.style.height = "30px"
    items.style.display = "flex"
    items.style.justifyContent = "space-between"
    items.style.padding = "10px 10px"
    items.style.backgroundColor="white"
    items.classList.add("lists")
    let itemsLeft = document.createElement('div')

    // itemsLeft.style.border="2px solid black"
    itemsLeft.style.display = "flex"
    itemsLeft.style.alignItems = "center"
    itemsLeft.style.gap = "30px"
    itemsLeft.style.letterSpacing = "1px"
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.style.width = "18px";  
    checkBox.style.height = "18px";
    checkBox.value="yes"
    itemsLeft.appendChild(checkBox)
    let task = document.createElement("p")
    task.style.fontSize = "20px"
    task.style.color="black"
    task.classList.add("task-text")
    itemsLeft.appendChild(task)
    task.innerHTML = input.value
    let deleteButton = document.createElement("button")
    deleteButton.style.cursor="pointer"
    deleteButton.style.backgroundColor="red"
deleteButton.style.color="#fff"
deleteButton.style.border="none"
deleteButton.style.padding="3px 6px"
deleteButton.style.fontSize="15px"
    deleteButton.innerHTML = "X"
    // allTaskCount()
    checkBox.onclick =checking
     function checking(){
        if(checkBox.checked){

            // console.log(checkBox.value)
            completedTasks.appendChild(items);
            updateCompletedCount()
        }
        else{
            // console.log(checkBox.value)
            uncompletedTasks.appendChild(items)
            updateCompletedCount()
        }
        // allTaskCount()
        updateUncompletedCount()
     }
    let bool=true
    // allTaskCount()
    let removeElement=null
    deleteButton.onclick=deleteTask
    function deleteTask(){
        if(bool===true)
        {
            // checking()
            // list.append(items)
            deletedTasks.appendChild(items)
            removeElement= checkBox
            checkBox.style.opacity="0"
            task.style.textDecoration="line-through"
            deleteButton.innerHTML="undo"
            deleteButton.style.backgroundColor="#5dade2"
           
            bool=false
            checkBox.checked=false
            updateDeletedCount()
        }
        else{
        //    asks.appendChild(items);
            //                 } else {
                                uncompletedTasks.appendChild(items);
                            // }
            // itemsLeft.prepend(removeElement)
            checkBox.style.opacity="1"
            task.style.textDecoration="none"
            deleteButton.innerHTML="X"
            checkBox.checked=false
            deleteButton.style.backgroundColor="red"
            bool=true
            updateDeletedCount()
        }
        allTaskCount()
        updateUncompletedCount()
        updateCompletedCount()

    }
    items.appendChild(itemsLeft)
    
    // items.appendChild(checkBox)
    // items.appendChild(task)
    items.appendChild(deleteButton)
    // list.prepend(items)
    uncompletedTasks.appendChild(items);
    allTaskCount()
    updateUncompletedCount()
    // container.appendChild(list)
    // list.prepend(items);
    input.value=""
}



document.body.appendChild(header)
document.body.appendChild(container)






