let myLeads = []
let listItems = ""
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderleads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
})

deleteBtn.addEventListener("dbclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
// Render the leads in the unordered list using ulEl.textContent
function render(leads) {
    for (let i = 0; i < leads.length; i++)  {
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}
        </a>
        </li>
        `
      

    }
    ulEl.innerHTML = listItems
}
