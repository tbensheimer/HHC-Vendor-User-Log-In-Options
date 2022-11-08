import {companyData} from "./Json.js";
const table = document.querySelector(".company-data");


let company = JSON.parse(companyData);

let data = company['HP Inc'];

try {

Object.entries(data).forEach(entry => {

table.insertAdjacentHTML("beforeend", `
<tr class="company-rows">
<th class="company-row">${entry[0]}:</th>
<td class="company-row">${entry[1]}</td>
<td class="hidden expand2"><button type="button" 
    style="--bs-btn-padding-y: .05rem; --bs-btn-padding-x: .4rem;"
    class=" save save-comp btn btn-success btn-sm" onclick="saveRow(this)">
    <span><i alt="floppy disk icon" class="fa-solid fa-floppy-disk white"></i></span> Save</button></td>
    <td class="expand2"><button type="button" 
    style="--bs-btn-padding-y: .02rem; --bs-btn-padding-x: .4rem;"
    class="edit edit-cont btn btn-warning btn-sm" onclick="editRow(this)">
    <span><i alt="pencil icon" class="fa-solid fa-pencil white"></i></span> Edit</button></td>
</tr>

`)
});
}
catch {
table.insertAdjacentHTML("beforebegin", `
<div class="alert alert-danger>Error: Could not retrieve company data. Please try again later</div>
`)
}
