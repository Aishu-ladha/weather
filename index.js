var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var description = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
apik = "52e4130169fb7b7c8df0685f2a67de0a";
function convertion(val) {
  return (val - 273).toFixed(3);
}
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var temperature = data["main"]["temp"];
      var wndspeed = data["wind"]["speed"];

      city.innerHTML = `Weather of:<span>${nameval}<span>`;
      temp.innerHTML = `Temperature:<span>${convertion(temperature)}<span>`;
      description.innerHTML = `Sky condition:<span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed:<span>${wndspeed} km/h<span>`;
    })

    .catch((err) => alert("you entered wrong city "));
});
