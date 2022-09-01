function currentTime() {
  let colors = [
    "#FFFF18",
    "#DFFF18",
    "#C2FF18",
    "#9BFF18",
    "#73FF18",
    "#3FFF18",
    "#18FF2E",
    "#18FF60",
    "#18FF8B",
    "#18FFCB",
    "#18F5FF",
    "#18F5FF",
    "#1896FF",
    "#1865FF",
    "#183CFF",
    "#4418FF",
    "#7718FF",
    "#A918FF",
    "#E518FF",
    "#FF18D3",
    "#FF189B",
    "#FF186A",
    "#FF1818",
    "#FF9818А",
  ];
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
  document.querySelector(".body").style.backgroundColor = colors[hour];
}
function updateTime(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
currentTime();
