class Ground {

    constructor () {

        var options ={

            isStatic : true 

        }

    this.body = Bodies.rectangle( 200 , 370 , 400 , 20 , options );
    this.width = 400;
    this.height = 20;
    World.add(world , this.body );

    }

    display() {
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x , this.body.position.y , this.width , this.height);
    }
}