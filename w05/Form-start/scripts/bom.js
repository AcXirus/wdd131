// Select DOM elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Declare the array and assign it using getChapterList(), or an empty array if falsy
let chaptersArray = getChapterList() || [];

// Populate the list with stored chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Event listener for the Add Chapter button
button.addEventListener("click", () => {
  if (input.value.trim() !== "") {  // Make sure the input is not empty
    displayList(input.value);       // Display the new chapter
    chaptersArray.push(input.value); // Add to array
    setChapterList();               // Save to localStorage
    input.value = "";               // Clear the input
    input.focus();                  // Refocus the input
  }
});

// Function to build and display a list item
function displayList(item) {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  
  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete"); // Optional class for styling
  
  li.append(deleteButton);
  list.append(li);

  // Event listener to remove the chapter
  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });

  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

// Save the array to localStorage
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Get the chapter list from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Delete a chapter from the array and update localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove the ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}


