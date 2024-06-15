const inputbox = document.getElementById("input-box");
const listCointainer = document.getElementById("list-cointainer");

function AddTask(){
   if(inputbox.value === ''){
    alert("write something to add ra waste fellow");
   }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listCointainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
   }
   inputbox.value = "";

}