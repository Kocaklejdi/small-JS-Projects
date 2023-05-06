let today = new Date();
let time = today.getHours();
//console.log(Math.cos(210));

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "48px"

const canvasSize = 400;
canvas.width = canvasSize;
canvas.height = canvasSize;

const hourHandSize = 130;
const minuteHandSize = 160;
const secondHandSize = 190;

canvas.style =`width:${canvasSize}px;height:${canvasSize}px`
const centerPos = {
    xPos: canvasSize/2,
    yPos: canvasSize/2,
}

setInterval(drawClock,1000);


function drawClock(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHands();
    drawNumbers();
   
    
}

function drawNumbers(){
    for(let i = 1 ; i<13 ; i++){
        ctx.beginPath();
        const x = -4 + centerPos.xPos + 180 * Math.sin(degrees_to_radians(i*30));
        const y = 4 + centerPos.xPos - 180 * Math.cos(degrees_to_radians(i*30));
        ctx.fillText(i,x,y,100);
    }
}

function drawHands(){
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const hourAngle = degrees_to_radians(hours * 30);
    const minuteAngle = degrees_to_radians(minutes * 6);
    const secondAngle = degrees_to_radians(seconds * 6);

    const hourPos = {xPos:centerPos.xPos + hourHandSize * Math.sin(hourAngle),yPos: centerPos.yPos - hourHandSize * Math.cos(hourAngle)}
    const minutePos = {xPos:centerPos.xPos + minuteHandSize * Math.sin(minuteAngle),yPos: centerPos.yPos - minuteHandSize * Math.cos(minuteAngle)}
    const secondPos = {xPos:centerPos.xPos + secondHandSize * Math.sin(secondAngle),yPos: centerPos.yPos - secondHandSize * Math.cos(secondAngle)}

    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.moveTo(centerPos.xPos,centerPos.yPos);
    ctx.lineTo(hourPos.xPos,hourPos.yPos);
    ctx.stroke();
    ctx.lineWidth = 4;
    ctx.moveTo(centerPos.xPos,centerPos.yPos);
    ctx.lineTo(minutePos.xPos,minutePos.yPos);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.moveTo(centerPos.xPos,centerPos.yPos);
    ctx.lineTo(secondPos.xPos,secondPos.yPos);
    ctx.stroke();
}

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}