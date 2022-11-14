import {demo, typeCatData} from "./Json.js";

const table = document.querySelector(".types-data");
let demonstration = JSON.parse(demo);
let typesArray = [];

try {
Object.entries(demonstration).forEach(demo => {

    let type = demo[0];
    let items = demo[1];

    let htmlStart = `<td class="types-td">
    <button class="collapsible btn types-td-btn" data-type="${type}" id="btn" name="type">
    <span><i alt="arrow down icon" class="fa-solid fa-chevron-down"></i></span> ${type}     
    </button>
    <div class="content content-div mt-4 pt-2">
    <button type="button" style="--bs-btn-padding-y: .05rem; --bs-btn-padding-x: .4rem;"
    class="del-type btn btn-danger btn-sm mb-2" onclick="deleteRow(this)">
    <span><i alt="trash icon" class="fa-solid fa-trash white"></i></span> Remove Type
    </button>
    <p class="mb-2 mt-2"><u><strong>Categories:</strong></u></p>
    `;

    let htmlEnd = `
    <ul class="btn-div">
  
    </ul>
    </div>
    </td>`;

    let htmlItems = ``;

    for (var ii in items) {
        htmlItems += `<li class="category mb-1">${items[ii]}</li>`;
    }


table.insertAdjacentHTML("beforeend", htmlStart + htmlItems + htmlEnd);
typesArray.push(type)
    })
    }
catch {
    table.insertAdjacentHTML("beforeend", `
<div class="alert alert-danger">Error: Could not retrive data. Please try again.</div>
    `)
}

document.addEventListener('click', e => {
  if(e.target.id == 'btn') {

      e.target.classList.toggle("active");
      let td = e.target.parentNode;
      let content = td.querySelector(".content-div");
      let icon = td.parentNode.querySelector(".fa-chevron-down");
      icon.classList.toggle("rotate");
      content.classList.toggle("content")
  }
})

