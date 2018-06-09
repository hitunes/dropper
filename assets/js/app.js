
var checkbox = Array.from(document.getElementsByClassName('checkbox'));
console.log(checkbox);
checkbox.forEach(function (check) {
  check.addEventListener('click', function (e) {
    var text = e.target.parentElement.previousElementSibling;
    (check.checked == true) ? text.style.color = '#0090f7' : text.style.color = '#a4aab3';
  })
});
function bomb() {

}

//