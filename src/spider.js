"use strict";

module.exports = exports = Spider;

function Spider(position) {
	this.state = "up";
	this.frame = 0;
	this.timer = 0;
	this.x = position.x;
	this.y = position.y;
	this.width = 32;
	this.height = 16;
	this.count = 0;
	this.spritesheet = new Image();
	this.spritesheet.src = encodeURI('assets/spider/spider walk.png');
}

Spider.prototype.update = function(time) {
	this.timer += time;
	if(this.timer > 1000/16) {
		this.frame = (this.frame + 1)%3;
		this.timer = 0;
	}
	if(this.count == 100)
	{
		this.state = "down";
	}
	if(this.count == 0)
	{
		this.state = "up";
	}
	switch(this.state) {
		case "up":
			this.x += 1;
			this.y += 0.5;
			this.count++;
			break;
		case "down":
			this.x -= 1;
			this.y -= 0.5;
			this.count--;
			break;
	}
}

Spider.prototype.render = function(time, ctx) {
	ctx.drawImage(
		//image
		this.spritesheet,
		//source 
		this.frame*this.width, 0, this.width, this.height,
		//destination
		this.x, this.y, 2*this.width, 2*this.height
	);
}