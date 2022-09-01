function currentTime() {
  let months = [
    "ЯНВАРЯ",
    "ФЕВРАЛЯ",
    "МАРТА",
    "АПРЕЛЯ",
    "МАЯ",
    "ИЮНЯ",
    "ИЮЛЯ",
    "АВГУСТА",
    "СЕНТЯБРЯ",
    "ОКТЯБРЯ",
    "НОЯБРЯ",
    "ДЕКАБРЯ",
  ];
  let days = [
    "ВОСКРЕСЕНЬЕ",
    "ПОНЕДЕЛЬНИК",
    "ВТОРНИК",
    "СРЕДА",
    "ЧЕТВЕРГ",
    "ПЯТНИЦА",
    "СУББОТА",
  ];
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = days[date.getDay()];
  let monthDay = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let refresh = setTimeout(function () {
    currentTime();
  }, 1000);
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
  document.getElementById("day").innerHTML = day;
  document.getElementById("date").innerHTML =
    monthDay + "." + month + "." + year + "года";
}
function updateTime(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
currentTime();
