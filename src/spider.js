"use strict";

module.exports = exports = Spider;

function Spider(position) {
	this.state = "moving";
	this.frame = 0;
	this.timer = 0;
	this.x = position.x;
	this.y = position.y;
	this.width = 16;
	this.height = 16;
	this.spritesheet = new Image();
	this.spritesheet.src = encodeURI('assets/spider/spider walk.png');
}

Spider.prototype.update = function(time) {
	this.timer += time;
	switch(this.state) {
		case "moving":
			if(this.timer > 1000/16) {
				this.frame = (this.frame + 1)%4;
				this.timer = 0;
			}
			this.x -= 1;
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