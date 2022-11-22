/*
var text = "just some text";
var xx = text.split("");
console.log(xx);
var bb = xx.shift();
console.log(bb);
*/

function sleep() {
  i++;
  if (i > 2) {
    i = 0;
    ar = makeText(); // reset
  }
  scroll.innerHTML = "";
  start();
}

function makeText() {
  var text = "Sublime Text";
  var text1 = "Visual Studio";
  var text2 = "Toma";

  var stext = text.split("");
  var stext1 = text1.split("");
  var stext2 = text2.split("");

  var ourArray = [stext, stext1, stext2];
  return ourArray;
}

var ar = makeText();

var scroll = document.getElementById("scroll");
var loop;

var i = 0;

function start() {
  if (ar[i].length > 0) {
    scroll.innerHTML += ar[i].shift();
    loop = setTimeout(start, 300);
  } else {
    var ss = setTimeout(sleep, 2000);
  }
}

start();
