class Paper
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		
		this.radius=radius;
		this.image = loadImage("paper.png");
        this.x = x;
		this.y = y;
		this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2, options);
        World.add(world, this.body);
        
	}
	display()
    {
			
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(6);
			fill(255,0,255);
			imageMode(CENTER);

			image(this.image,0,0,this.radius,this.radius);
			pop()
			
	}

}