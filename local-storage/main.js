var btn1 = document.getElementById('btn1');

var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var i = 0;
var d = 0;

if (localStorage.getItem('winner') == 1) {
    alert('The last winner is Player 1');
} else if(localStorage.getItem('winner') == 2) {
    alert('The last winner is Player 2');
}

btn1.addEventListener('click', function() {
    i++;
    score1.innerHTML = i;
    if(i == 20) {
        alert('The winner is Player 1');
        localStorage.setItem('winner', '1');
    }
});

addEventListener('keydown', function() {
    d++;
    score2.innerHTML = d;
    if(d == 20) {
        alert('The winner is Player 2');
        localStorage.setItem('winner', '2');
    }
})
