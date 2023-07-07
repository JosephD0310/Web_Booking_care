var dateInput = document.getElementById("date");
var timeSelect = document.getElementById("time");
var ticketInfo = document.getElementById("ticketInfo");
var selectedDate = document.getElementById("selectedDate");
var selectedTime = document.getElementById("selectedTime");
var all = document.querySelectorAll;

dateInput.addEventListener("input", function() {
  // Reset giá trị lựa chọn giờ và ẩn thông tin vé
  timeSelect.value = "";
  ticketInfo.style.display = "none";
});

timeSelect.addEventListener("change", function() {
  var date = dateInput.value;
  var time = timeSelect.value;

  if (date && time) {
    // Hiển thị thông tin vé
    selectedDate.textContent = "Ngày: " + date;
    selectedTime.textContent = "Giờ: " + time;
    ticketInfo.style.display = "block";
  }
});

function blur(){
  all.style.display = "blur";
  
}