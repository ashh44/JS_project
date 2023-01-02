/*global console,document*/
/*document*/
if (typeof window === 'object') {
let myLeads=["www.sat.com","www.gate.com"]

const inputEl = document.getElementById("input-el")


const inputBtn = document.getElementById("input-btn")

let ulEl=document.getElementById("ul-el")

//localStorage.setItem("myName","ASHH")
let leadStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(name)

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()
})
function renderLeads(){
let listItems=""

for(let i=0;i<myLeads.length ; i++){
    listItems+=`
    <li>
    <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
     </a>
    </li>
    `
    console.log(listItems)
}
ulEl.innerHTML=listItems
}
}