let input_id = document.getElementById("input_id");
let addTask = document.getElementById("addTask");

output();

addTask.addEventListener("click", function () {
  valueOfinput_id = input_id.value;
  if (valueOfinput_id.trim != 0) {
    let checkAvaivaleItems = localStorage.getItem("localtask");
    if (checkAvaivaleItems == null) {
      toDoObj = [];
    } else {
      toDoObj = JSON.parse(checkAvaivaleItems);
    }
    toDoObj.push(valueOfinput_id);

    localStorage.setItem("localtask", JSON.stringify(toDoObj));
  }
  output();
});

function output() {
  valueOfinput_id = input_id.value;
  let checkAvaivaleItems = localStorage.getItem("localtask");
  if (checkAvaivaleItems == null) {
    toDoObj = [];
  } else {
    toDoObj = JSON.parse(checkAvaivaleItems);
  }
  let varForOutput = "";
  let tableOfList = document.getElementById("tableOfList");
  toDoObj.forEach((element, ind) => {
    varForOutput += ` <tbody>
    <tr>
      <td>${ind + 1}</td>
      <td>${element}</td>
      <td><button type="button" onclick="edit(${ind})"><i class="fas fa-edit"></i></button></td>
      <td><i class="fas fa-trash"></i></td>
    </tr>
    <tr></tr>
  </tbody>`;
  });
  tableOfList.innerHTML = varForOutput;
}

function edit(ind) {
  let checkAvaivaleItems = localStorage.getItem("localtask");
  let toDoObj = JSON.parse(checkAvaivaleItems);
  input_id.value = toDoObj[ind];
  let hidden_id = document.getElementById("hidden_id");
  hidden_id.value = ind;
  let addTask = document.getElementById("addTask");
  let saveTask = document.getElementById("saveTask");
  addTask.style.display = "none";
  saveTask.style.display = "block";
}

// save
let saveTask = document.getElementById("saveTask");
hidden_id.addEventListener("click", function () {
  let checkAvaivaleItems = localStorage.getItem("localtask");
  let toDoObj = JSON.parse(checkAvaivaleItems);
  let hidden_id = document.getElementById("hidden_id").value;
});
