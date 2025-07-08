// Select DOM elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Add event listener to the button
button.addEventListener("click", () => {
  const chapter = input.value.trim();
  if (chapter !== "") {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = chapter;
    deleteButton.textContent = "❌";
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
    });

    input.value = "";
  }
  input.focus();
});
