// JavaScript Document
window.onload=function(){
	var canvas = document.getElementById("sky");
	var ctx = canvas.getContext('2d');
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width=W;
	canvas.height=H;
	var mf=100;
	var flaker = [];
	for(var i=0;i<mf;i++){
		flaker.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*5+2,
			d: Math.random()+1
		})
	}
	function drawflaker(){
		ctx.clearRect(0,0,W,H)
		ctx.fillStyle="white";
		ctx.beginPath();
		for(var i=0;i<mf;i++){
			var f =flaker[i];
			ctx.moveTo(f.x,f.y);
			ctx.arc(f.x,f.y,f.r,0,Math.PI*2,true)
		}
		ctx.fill();
		moveFlaker();
	}
	var angle = 0;
	function moveFlaker(){
		angle+=0.01;
		for(var i=0;i<mf;i++){
			var f = flaker[i];
			f.y+=Math.pow(f.d,2)+1;
			f.x+=Math.sin(angle)*2;
			if(f.y>H){
				flaker[i]={x:Math.random()*W,y:0,r:f.r,d:f.d};
			}
		}
	}
	setInterval(drawflaker, 25);
}