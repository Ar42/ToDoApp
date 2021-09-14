let input_id = document.getElementById("input_id");
let addTask = document.getElementById("addTask");

output();

addTask.addEventListener("click", function () {
  valueOfinput_id = input_id.value;
  let t = valueOfinput_id.trim();
  if (t.length != 0) {
    document.getElementById("zeroSpaceAlert").innerHTML =
      "*Data added successfully";
    document.getElementById("zeroSpaceAlert").style.color = "green";
    let checkAvaivaleItems = localStorage.getItem("localtask");
    if (checkAvaivaleItems == null) {
      toDoObj = [];
    } else {
      toDoObj = JSON.parse(checkAvaivaleItems);
    }
    toDoObj.push(valueOfinput_id);

    localStorage.setItem("localtask", JSON.stringify(toDoObj));
  } else {
    document.getElementById("zeroSpaceAlert").innerHTML =
      "Please write something!!!";
    document.getElementById("zeroSpaceAlert").style.color = "red";
  }
  input_id.value = "";
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
      <td><button type="button" onclick="edit(${ind})"><a href="#input_id"><i class="fas fa-edit"></i></a></button></td>
      <td><button type="button" onclick="deleteOne(${ind})"><i class="fas fa-trash"></i></button></td>
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
  hidden_id.value = ind; //getting the id of selected item for edit which will help in save
  let addTask = document.getElementById("addTask");
  let saveTask = document.getElementById("saveTask");
  addTask.style.display = "none";
  saveTask.style.display = "block";
}
//save
let saveAterEdit = document.getElementById("saveTask");
saveAterEdit.addEventListener("click", function () {
  let checkAvaivaleItems = localStorage.getItem("localtask");
  let toDoObj = JSON.parse(checkAvaivaleItems);
  let hidden_id = document.getElementById("hidden_id").value;
  toDoObj[hidden_id] = input_id.value;
  let t = input_id.value.trim();
  toDoObj[hidden_id] = input_id.value;

  if (t.length != 0) {
    localStorage.setItem("localtask", JSON.stringify(toDoObj));
    input_id.value = "";
    document.getElementById("zeroSpaceAlert").innerHTML =
      "*Data updated successfully";
    document.getElementById("zeroSpaceAlert").style.color = "green";
    document.getElementById("addTask").style.display = "block";
    document.getElementById("saveTask").style.display = "none";
  } else {
    document.getElementById("zeroSpaceAlert").innerHTML =
      "*please write something!!!";
    document.getElementById("zeroSpaceAlert").style.color = "red";
  }
  output();
});

//delete
function deleteOne(ind) {
  let checkAvaivaleItems = localStorage.getItem("localtask");
  let toDoObj = JSON.parse(checkAvaivaleItems);

  localStorage.setItem("localtask", JSON.stringify(toDoObj));
  toDoObj.splice(ind, 1);
  localStorage.setItem("localtask", JSON.stringify(toDoObj));

  output();
}
