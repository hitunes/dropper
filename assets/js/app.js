var checkbox = Array.from(document.getElementsByClassName("checkbox"));
console.log(checkbox);
checkbox.forEach(function(check) {
  check.addEventListener("click", function(e) {
    var text = e.target.parentElement.previousElementSibling;
    check.checked == true
      ? (text.style.color = "#0090f7")
      : (text.style.color = "#a4aab3");
  });
});
// dragger code
function handleDragStart(e) {
  this.style.opacity = "0.01";
  // this / e.target is the source node.
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = "move"; // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  let mhover = document.getElementsByClassName(
    "main__content-circle-details-m"
  )[0];
  mhover.classList.add("over");
}

function handleDrop(e) {
  // this / e.target is current target element.
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  // See the section on the DataTransfer object.

  return false;
}
var counter = 0;

function handleDragEnd(e) {
  // this/e.target is the source node.

  let mhover = document.getElementsByClassName(
    "main__content-circle-details-m"
  )[0];
  mhover.classList.remove("over");

  var spanget = document.getElementById("getter");
  counter += 1;
  spanget.innerHTML = `${counter} tasks added`;
}

var cols = document.querySelectorAll(".control-btn");
[].forEach.call(cols, function(col) {
  col.addEventListener("dragstart", handleDragStart, false);
  col.addEventListener("dragenter", handleDragEnter, false);
  col.addEventListener("dragover", handleDragOver, false);
  col.addEventListener("drop", handleDrop, false);
  col.addEventListener("dragend", handleDragEnd, false);
});
//dragger code end

//
