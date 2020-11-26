var weather;
var queryString;
var key;
var city;

function setup() {
  city = '&q=Madrid'
  key ='APPID=001b0f58045147663b1ea518d34d88b4';
  queryString = 'https://api.openweathermap.org/data/2.5/weather?'+ key + city;
  createCanvas(400, 200);
  loadJSON(
    queryString,
    gotData
  );
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) {
    fill(255);
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
  }
}
