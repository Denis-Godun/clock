//создаём функцию для создания часов, даты, дня недели
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

  //внутри создаём обьект Date
  let date = new Date();

  //заводим переменную под каждое значение: часы,минуты,секунды и т.д.
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  //для отображения дня и месяца не числами а буквами, создаём массив из которого будем брать значение соответсвующее месяцу
  let day = days[date.getDay()];
  let monthDay = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear(); 

  //создаём функцию setTimeout которая раз в секунду будет вызывать функцию currentTime, тем самым обновляя значение на часах
  let refresh = setTimeout(function () {
    currentTime();
  }, 1000);

  //вызываем функцию добавления 0 если значение часов, минут и секунд < 10
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  //добавляем часы в разметку
  document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;

  //добавляем день недели в размтку
  document.getElementById("day").innerHTML = day;

  //добавляем дату в разметку
  document.getElementById("date").innerHTML =
    monthDay + "." + month + "." + year + "года";

//создаём массив цветов и меняем цвет фона каждый час
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
   let body = document.querySelector(".body").style.backgroundColor = colors[hour];
}
//создаём функцию с условием при котором перед часами,секундами и минутами ставится 0, если они < 10
function updateTime(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}
currentTime();
