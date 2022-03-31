var buttonDans = document.getElementById('button_dans');
var buttonShock = document.getElementById('button_shock');
var buttonSchrikken = document.getElementById('button_schrik');
var video = document.getElementById('video');


buttonDans.addEventListener('click', speelDans);
buttonShock.addEventListener('click', speelShock);
buttonSchrikken.addEventListener('click', speelSchrik);

function speelDans() {
    video.src = "img/dansen.mp4";
    console.log('run dans');
}

function speelShock() {
    video.src = "img/kortsluiting.mp4";
    console.log('run shock');
}

function speelSchrik() {
    video.src = "img/schrikken.mp4";
    console.log('sup schrik');
}