const app = document.createElement("ol");
document.querySelector(".items").appendChild(app);

let items = localStorage.getItem("todo-list");
items = items === null ? [] : JSON.parse(items);

for (const item of items) {
  createRow(item);
}

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  const value = document.querySelector("form input").value;
  if (value.trim() === "") {
    alert("please enter value");
    return;
  }

  const id = Math.floor((Math.random() + 1) * 1000000);
  const data = { id, value };
  items.push(data);
  // localStorage.getItem("todo-list", JSON.stringify(items));
  createRow(data);
};

function createRow(data) {
  const row = document.createElement("li");
  const title = document.createElement("h3");
  title.innerHTML = data.value;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.onclick = () => {
    if (confirm("Delete this row?")) {
      row.remove();
    }
  };
  row.appendChild(title);
  row.appendChild(deleteButton);
  app.appendChild(row);
}

// function sync() {
//   localStorage.setItem("todo-list", JSON.stringify(items));
// }
