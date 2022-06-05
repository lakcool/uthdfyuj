
var canvas = new fabric.Canvas("myCanvas");

var ball_x=0;
var ball_y=0;
var hole_x=800;
var hole_y=400;
var hole_o="";
var ball_o="";


 var block_image_width = 5;
 var block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_o=Img;
		hole_o.scaleToWidth(50);
		hole_o.scaleToHeight(50);
		hole_o.set({
			top:hole_y,
			left:hole_x

		});
canvas.add(hole_o);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
		ball_o=Img;
		ball_o.scaleToWidth(50);
		ball_o.scaleToHeight(50);
		ball_o.set({
			top:ball_y,
			left:ball_x

		});
canvas.add(ball_o);
	});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
if ((ball_x==hole_x) && (ball_y==hole_y )) {
	canvas.remove(ball_o);
	document.getElementById("hd3").innerHTML="you hit the goal";
	document.getElementById("myCanvas").style.borderColor="red";
}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y>5){
			ball_y=ball_y-block_image_height;
			canvas.remove(ball_o);
			new_image()
		}
	}

	function down()
	{
		if (ball_y<=450){
			ball_y=ball_y+block_image_height;
			canvas.remove(ball_o);
			new_image()
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_width;
			canvas.remove(ball_o);
			new_image()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x=+lock_image_width;
			canvas.remove(ball_o);
			new_image()
		}
	}
	
}

