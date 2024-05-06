var fortunes = [
  "you will break a bone",
  "you will catch a cold",
  "you will stub your toe",
  "you will get a paper cut",
  "you will get 5 dollars",
  "you will get food poisoning",
];

var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

function generateFortune(name) {
  var randomIndex = Math.floor(Math.random() * fortunes.length);
  var randomFortune = fortunes[randomIndex];
  var output = document.getElementById("fortune");
  output.innerText = name + ", " + randomFortune + ".";
}

function reStyle() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  var randomColor = colors[randomIndex];
  if (randomIndex == 0) {
    document.getElementById("fortune").style.color = randomColor;
    document.getElementById("fortune").style.fontSize = "24px";
  } else if (randomIndex == 1) {
    document.getElementById("fortune").style.color = randomColor;
    document.getElementById("fortune").style.fontFamily = "arial";
    document.getElementById("fortune").style.fontSize = "19px";
  } else if (randomIndex == 2) {
    document.getElementById("fortune").style.color = randomColor;
    document.getElementById("fortune").style.textDecoration = "underline";
    document.getElementById("fortune").style.fontSize = "12px";
  } else if (randomIndex == 3) {
    document.getElementById("fortune").style.color = randomColor;
    document.getElementById("fortune").style.fontWeight = "bold";
    document.getElementById("fortune").style.fontSize = "9px";
  } else if (randomIndex == 4) {
    document.getElementById("fortune").style.color = randomColor;
    document.getElementById("fortune").style.fontFamily = "Comic Sans MS";
    document.getElementById("fortune").style.fontSize = "30px";
  } else if (randomIndex == 5) {
    document.getElementById("fortune").style.color = randomColor;
    document.getElementById("fortune").style.textDecoration = "underline";
    document.getElementById("fortune").style.fontSize = "14px";
  } else {
    document.getElementById("fortune").style.color = randomColor;
    document.getElementById("fortune").style.fontWeight = "normal";
    document.getElementById("fortune").style.fontSize = "20px";
  }
}

function generate() {
  let name = document.getElementById("name").value;
  generateFortune(name);
  reStyle();
}
