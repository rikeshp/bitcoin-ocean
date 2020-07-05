var ws = new WebSocket('wss://ws.blockchain.info/inv');

const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
    
const ctx = canvas.getContext('2d');
    
var imgWhale = document.getElementById("whale");
var imgShark = document.getElementById("shark");
var imgFish = document.getElementById("fish");
var imgShrimp = document.getElementById("shrimp");
    
ws.onopen = function(){
    ws.send(JSON.stringify({"op":"unconfirmed_sub"}));
}	
	
ws.onmessage = function(onmsg){
    var response = JSON.parse(onmsg.data);
    var satVal = response.x.out[0].value;
    var btcVal = satVal/100000000;
    document.getElementById('waitingBTC').innerHTML = "Tx Amount: " + btcVal + " BTC";
    console.log(response);
    
    var xCoor = Math.floor(Math.random() * (canvas.width-2)) + 1;
    var yCoor = Math.floor(Math.random() * (canvas.height-2)) + 1;

    if (btcVal >= 50){
	ctx.drawImage(imgWhale, xCoor, yCoor);
    } else if (btcVal >= 10 && btcVal < 50){
	ctx.drawImage(imgShark, xCoor, yCoor);	
    } else if (btcVal >= 1 && btcVal < 10) {
	ctx.drawImage(imgFish, xCoor, yCoor);
    } else if (btcVal > 0 && btcVal < 1) {
	ctx.drawImage(imgShrimp, xCoor, yCoor);
    }
}

ws.onclose = function(){
    console.log("connection closed");
}
