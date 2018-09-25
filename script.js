const rowInput = document.querySelector("#row-count");
const colInput = document.querySelector("#col-count");
const widInput = document.querySelector("#tab-width");
const border = document.querySelector("#border-width");
const b = document.getElementById("generate");
b.addEventListener("click", function() {
  generateTable(rowInput.value, colInput.value, widInput.value, border.value);
});

//* Main function for table generation
//*===================================
function generateTable(rows, cols, width, border) {
  const tableDiv = document.querySelector(".table-div");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  tbody.className = "table-body"; //! called in the addRow function

  tableDiv.appendChild(table);
  table.appendChild(thead);
  table.appendChild(tbody);
  const tr = document.createElement("tr");
  tr.id = "header-row";
  thead.appendChild(tr);

  //* Creating table header
  for (i = 0; i < cols; i++) {
    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerHTML = `Header${i + 1}`;
  }

  //* Creating table body
  for (i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (y = 0; y < cols; y++) {
      const td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = `Value${y + 1}`;
    }
  }
  const tabSelect = document.querySelectorAll("table, th, td");
  tabSelect.forEach(element => {
    element.style.border = `${border}px solid`;
    element.style.borderCollapse = "collapse";
    //element.style.borderCollapse = "collapse";
  });

  //  Table width function
  const tableWidth = document.querySelector("table");
  tableWidth.style.width = `${width}%`;
}
//* End of function for table generation
//*===================================

//* COLOR CHANGE functions
//*===================================
const tableBgInput = document.querySelector("#tableBg");
const headerBgInput = document.querySelector("#headerBg");
const fontColorInput = document.querySelector("#fontColor");
const bodyBgInput = document.querySelector("#bodyBg");
const borderColorInput = document.querySelector("#borderColor");

headerBgInput.addEventListener("change", function() {
  headerColor(headerBgInput.value);
});
tableBgInput.addEventListener("change", function() {
  backgroundColor(tableBgInput.value);
});
fontColorInput.addEventListener("change", function() {
  fontColor(fontColorInput.value);
});
bodyBgInput.addEventListener("change", function() {
  bodyColor(bodyBgInput.value);
});
borderColorInput.addEventListener("change", function() {
  borderColor(borderColorInput.value);
});

function borderColor(val) {
  const tabSelect = document.querySelectorAll("table, th, td");
  tabSelect.forEach(element => {
    element.style.borderColor = val;
  });
}
function backgroundColor(val) {
  const tabSelect = document.querySelectorAll("td");
  tabSelect.forEach(element => {
    element.style.backgroundColor = val;
  });
}
function headerColor(val) {
  const tabSelect = document.querySelectorAll("th");
  tabSelect.forEach(element => {
    element.style.backgroundColor = val;
  });
}
function fontColor(val) {
  const tabSelect = document.querySelectorAll("table");
  tabSelect.forEach(element => {
    element.style.color = val;
  });
}
function bodyColor(val) {
  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = val;
}
//* End of COLOR CHANGE functions
//*===================================

//* Typesetting functions
//*===================================

function fontType() {
  const fontSelect = document.querySelector("table");
  const a = document.querySelector("#font");
  fontSelect.style.fontFamily = a.value;
}
function fontWeight() {
  const fontSelect = document.querySelector("table");
  const a = document.querySelector("#weight");
  fontSelect.style.fontWeight = a.value;
}

function alignment() {
  const textAlign = document.querySelectorAll("td");
  textAlign.forEach(element => {
    const a = document.querySelector("#align");

    element.style.textAlign = a.value;
  });
}

function addRow() {
  let rowCount = document.querySelector("#header-row").childElementCount;
  const tbody = document.querySelector(".table-body");
  let newRow = tbody.insertRow(-1);

  for (i = 1; i <= rowCount; i++) {
    let newCol = newRow.insertCell(-1);
    var newText = document.createTextNode(`New ${i}`);
    newCol.appendChild(newText);
  }
}
