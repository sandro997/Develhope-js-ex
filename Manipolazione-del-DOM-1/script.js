function addProduct() {
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");

  if (input.value.trim() === "") {
    alert("Inserisci una task!");
    return;
  }

  const newElement = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  newElement.appendChild(checkbox);
  newElement.appendChild(document.createTextNode(" " + input.value));

  ul.appendChild(newElement);

  input.value = "";
}
