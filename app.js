var currentDate = moment().format("DD");
currentDate = parseInt(currentDate)
console.log(currentDate);
for (i = 0; i < 32; i++) {
  var date = document.getElementById(i);
  if (date && date.textContent === currentDate.toString()) {
    date.style.color = "red";
    date.style.fontWeight= "bold"
    break;
  }
}
