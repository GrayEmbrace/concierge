//Will run the main game loop and handle global variables
use2D = true;
//Potential causes for breaks:
//Sprite name changes

//is the character busy?
var busy = false;

//call load functions for all objects
var phone = loadPhone();
var robot = loadRobot();
var computer = loadComputer();
var elevator = loadElevator();
var character = loadCharacter();
var rooms = loadRooms();
var minibot = loadMinibot();

var customers = new List();
var people = loadPeople();
customers.push(people);

//Define manager; manages clicks on sprites
var manager = new Sprite();
manager.clicked = false;
manager.target = undefined;
world.addChild(manager);
var sprites = new Array();
sprites.push(phone);
sprites.push(robot);
sprites.push(character);
sprites.push(computer);

//checkSprite: checks to see if mouse/sprite coordinates are overlapping
function checkSprite(sprite, x, y) {
	var minX = sprite.x;
	var maxX = sprite.x + sprite.width;
	var minY = sprite.y;
	var maxY = sprite.y + sprite.height;
	var mx = x;
	var my = y;

	if (mx >= minX && mx <= maxX && my >= minY && my <= maxY) {
		return true;
	}
	return false;
}

//Mouse manager function
manager.onMouseDown = function(button) {
	for (var sprite in sprites) {
		sprite = sprites[sprite];
		//check if clicked on a clickable thing
		if (checkSprite(sprite, gInput.mouse.x, gInput.mouse.y)) {
			sprite.click();
			console.log("I clicked a thing");
			break;
		}
	}
	//character.moveTo(gInput.mouse.x, gInput.mouse.y);
};
gInput.addMouseDownListener(manager);

customerLoop = function(){
	var time = 0;
	var spawn = 0;
	for(i=1; i<1000; i++){		
		if(time%6000 == 0){
			var newCust = loadPeople();
			newCust.y = customers.getAt(spawn).y - people.space;
			customers.push(newCust);
			spawn++;
		}
		time++;
		if(time==61) time=0;
	}
};
customerLoop();