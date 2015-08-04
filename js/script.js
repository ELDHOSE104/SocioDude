/**
 * Created by eldhose on 4/8/15.
 */

var canvas = document.getElementById('drawCanvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = '3';
canvas.addEventListener('mousedown', startDraw, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', endDraw, false);
//create a flag
var isActive = false;

// array to collect coordinates
var plots = [];

function draw(e) {
    if(!isActive) return;

    // cross-browser canvas coordinates
    var x = e.offsetX || e.layerX - canvas.offsetLeft;
    var y = e.offsetY || e.layerY - canvas.offsetTop;

    plots.push({x: x, y: y});

    drawOnCanvas(plots);
}
function drawOnCanvas(color, plots) {
    ctx.beginPath();
    ctx.moveTo(plots[0].x, plots[0].y);

    for(var i=1; i<plots.length; i++) {
        ctx.lineTo(plots[i].x, plots[i].y);
    }
    ctx.stroke();
}

function startDraw(e) {
    isActive = true;
}

function endDraw(e) {
    isActive = false;

    // empty the array
    plots = [];
}