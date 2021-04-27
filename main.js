/*
//var x = setTimeout(run, 2000);
var x = setInterval(run, 2000);
var i = 0;
function run() {
  document.write("Hello");
  i++;
  if (i > 2) {
    clearInterval(x);
  }
}
*/

/*
function semaphore() {
  var colors = document.getElementsByClassName("colors");
  colors[0].style.background = "red";
  colors[1].style.background = "gray";
  colors[2].style.background = "gray";

  var x = setTimeout(changeToYellow, 3000);
  var y = setTimeout(changeToGreen, 5000);

  function changeToYellow() {
    colors[1].style.background = "yellow";
  }

  function changeToGreen() {
    colors[0].style.background = "gray";
    colors[1].style.background = "gray";
    colors[2].style.background = "green";
  }
}
var start = setInterval(semaphore, 8000);

function semaphore2() {
  var colors2 = document.getElementsByClassName("colors2");
  colors2[0].style.background = "gray";
  colors2[1].style.background = "gray";
  colors2[2].style.background = "green";

  var y = setTimeout(changeToRed, 3000);
  var x = setTimeout(changeToYellow, 7000);

  function changeToRed() {
    colors2[0].style.background = "red";
    colors2[1].style.background = "gray";
    colors2[2].style.background = "gray";
  }

  function changeToYellow() {
    colors2[1].style.background = "yellow";
  }
}
var start = setInterval(semaphore2, 8000);

semaphore();
semaphore2();
*/

// Arrays
var banknotes = [100, 200, 500];
/*
banknotes.pop();
console.log(banknotes);
*/
/*
var x = banknotes.pop();
console.log(x);
*/
/*
banknotes.push(2000);
console.log(banknotes);
*/

/*
banknotes[3] = 2000;
console.log(banknotes);
banknotes[1000] = 23;
console.log(banknotes);
console.log(banknotes.length);
console.log(banknotes[500]);

var banknotes2 = [100, 200, 500, null, [1, 2, 3], { x: 1, y: 2 }];
console.log(banknotes2);

var money = banknotes.concat();
console.log(money);

money[0] = "gold";
console.log(money);

banknotes.splice(1, 1);
console.log(banknotes);
*/

// Date Object

var timer = document.getElementById("timer");
var loop;

function displayTime() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  timer.innerHTML = h + "h:" + m + "m:" + s + "s";
}

loop = setInterval(displayTime, 1000);
