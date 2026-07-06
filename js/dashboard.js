if(localStorage.getItem("loggedIn")!=="true"){

window.location.href="index.html";

}

const table=document.getElementById("employeeTable");

const search=document.getElementById("search");

function loadEmployees(list){

table.innerHTML="";

list.forEach(emp=>{

table.innerHTML+=`

<tr>

<td>${emp.name}</td>

<td>${emp.department}</td>

<td>${emp.email}</td>

<td>$${emp.salary}</td>

<td>

<button class="edit">Edit</button>

<button class="delete">Delete</button>

</td>

</tr>

`;

});

document.getElementById("totalEmployees").innerText=list.length;

}

loadEmployees(employees);

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=employees.filter(emp=>

emp.name.toLowerCase().includes(value)

||

emp.department.toLowerCase().includes(value)

);

loadEmployees(filtered);

});

document.getElementById("logout").onclick=function(){

localStorage.removeItem("loggedIn");

window.location.href="index.html";

}
