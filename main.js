const dropdownBtn = document.getElementById("dropmenu");
const dropdownMenu = document.getElementById("dropdown");

// Toggle dropdown function
const toggleDropdown = function () {
  if (dropdownMenu.style.display = "none") {
    dropdownMenu.style.display = "block"
  } else {
    dropdownMenu.style.display = "none"
  }
}

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  toggleDropdown()
  e.stopPropagation()
})

dropdownBtn.addEventListener("mouseover", function(e) {
    toggleDropdown()
    e.stopPropagation()
})

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
    dropdownMenu.style.display = "none";
})