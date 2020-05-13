// Add your code here
class VectorFont
{
    
    constructor(c)
    {
      this.shape = Array();
        var s = new Shape();
        s.addVector(1, 1, c);//0
        s.addVector(-1,1,c);
        s.addVector(-1, -1, c);
        s.addVector(1,-1,c);
        s.addVector(1,1,c);
        s.addVector(-1,-1,c);
        
        shapes.push(s);
        s = new Shape();
        s.addVector(0,-1,c); //1
        s.addVector(0,1,c);
        s.addVector(-0.5,0.5,c);
        
        shapes.push( s);
        s = new Shape();
        s.addVector(-1, 1, c); //2
        s.addVector(1, 1, c);
        s.addVector(1, 0, c);
        s.addVector(-1,0, c);
        s.addVector(-1,-1,c);
        s.addVector(1,-1,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(-1,1,c); //3
        s.addVector(1,1,c);
        s.addVector(1,0,c);
        s.addVector(-1,0,c);
        s.addVector(1,0,c);
        s.addVector(1,-1,c);
        s.addVector(-1,-1,c);
        shapes.push( s);
        s = new Shape();
        s.addVector( -1,1,c); //4
        s.addVector(-1,0,c);
              s.addVector(1,0,c);
        s.addVector(0,0,c);
        s.addVector(0,-1,c);
        s.addVector(0, 1, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1,1,c); //5
        s.addVector(-1,1,c);
        s.addVector(-1,0,c);
        s.addVector(1,0,c);
        s.addVector(1,-1,c);
        s.addVector(-1,-1,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, 1, c); //5
        s.addVector(-1, 1, c);
        s.addVector(-1, 0, c);
        s.addVector(1, 0, c);
        s.addVector(1, -1, c);
        s.addVector(-1, -1, c);
        s.addVector(-1,0,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(-1,1,c); //7
        s.addVector(1,1,c);
        s.addVector(0,-1,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, 0, c); //8
        s.addVector(-1, 0, c);
        s.addVector(-1, 1, c);
        s.addVector(1,1,c);
        s.addVector(1,-1,c);
        s.addVector(-1,-1,c);
        s.addVector(-1,0,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, 0, c); //9
        s.addVector(-1, 0, c);
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        s.addVector(1, -1, c);
        s.addVector(-1, -1, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1,-1,c); //A
        s.addVector(1,1,c);
        s.addVector(-1,1,c);
        s.addVector(-1,0,c);
        s.addVector(1,0,c);
        s.addVector(-1,0,c);
        s.addVector(-1,-1,c);
        shapes.push(s);
        s = new Shape();
        s.addVector(1, -1, c); //B
        s.addVector(1,0,c);
        s.addVector(0,1,c);
        s.addVector(-1,1,c);
        s.addVector(-1,0,c);
        s.addVector(1,0,c);
        s.addVector(-1,0,c);
        s.addVector(-1,-1,c);
        s.addVector(1,-1,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, -1, c); //C
        s.addVector(-1, -1, c);
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, -0.75, c); //D
        s.addVector(1, 0.75, c);
        s.addVector(0, 1, c);
        s.addVector(-1, 1, c);
        s.addVector(-1, -1, c);
        s.addVector(0.75, -1, c);
        s.addVector(1, -0.75, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, -1, c); //E
        s.addVector(-1, -1, c);
        s.addVector(-1, 0, c);
        s.addVector(1, 0, c);
        s.addVector(-1, 0, c);
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        
        shapes.push( s);
        s = new Shape();
        s.addVector(-1, -1, c); //F
        s.addVector(-1, 0, c);
        s.addVector(1, 0, c);
        s.addVector(-1, 0, c);
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(0, 0, c); //G
        s.addVector(1, 0, c);
        s.addVector(1, -1, c);
        s.addVector(-1, -1, c);
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, -1, c); //H
        s.addVector(1, 1, c);
        s.addVector(1, 0, c);
        s.addVector(-1, 0, c);
        s.addVector(-1, -1, c);
        s.addVector(-1, 1, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(0, -1, c); //I
        s.addVector(0, 1, c);
        
        shapes.push( s);
        s = new Shape();
        s.addVector(1, 1, c); //J
        s.addVector(-1, 1, c);
        s.addVector(0,1,c);
        s.addVector(0,-1,c);
        s.addVector(-1,-1,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(-1, 1, c); //K
        s.addVector(-1, 0, c);
        s.addVector(1, 1, c);
        s.addVector(-1,0, c);
        s.addVector(1, -1, c);
        s.addVector(-1,0,c);
        s.addVector(-1,-1,c);
        shapes.push( s);
        s = new Shape();
        s.addVector(1, -1, c); //L
        s.addVector(-1, -1, c);
        s.addVector(-1, 1, c);
        
        shapes.push( s);
        s = new Shape();
        s.addVector(-1, -1, c); //M
        s.addVector(-1, 1, c);
        s.addVector(0, 0, c);
        s.addVector(1, 1, c);
        s.addVector(1, -1, c);
        shapes.push( s);
        s = new Shape();
        s.addVector(-1, -1, c); //N
        s.addVector(-1, 1, c);
        s.addVector(1, -1, c);
        s.addVector(1, 1, c);
        
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, -1, c); //O
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        s.addVector(1, -1, c);
        s.addVector(-1,-1,c);

        shapes.push( s);
        s = new Shape();

        s.addVector(-1, -1, c); //P
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        s.addVector(1, 0, c);
        s.addVector(-1,0,c);
        
        shapes.push( s);
        s = new Shape();

        s.addVector(1, -1, c); //Q
        s.addVector(-1, -1, c);
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        s.addVector(1,-1,c);
        s.addVector(0,0,c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, -1, c); //R
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        s.addVector(1, 0, c);
        s.addVector(-1, 0, c);
        s.addVector(1,-1,c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, -1, c); //S
        s.addVector(1, -1, c);
        s.addVector(1, 0, c);
        s.addVector(-1, 0, c);
        s.addVector(-1, 1, c);
        s.addVector(1, 1, c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, 1, c); //T
        s.addVector(1, 1, c);
        s.addVector(0, 1, c);
        s.addVector(0, -1, c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, 1, c); //U
        s.addVector(-1, -1, c);
        s.addVector(1, -1, c);
        s.addVector(1, 1, c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, 1, c); //V
        s.addVector(-1, 0, c);
        s.addVector(0, -1, c);
        s.addVector(1, 0, c);
        s.addVector(1,1,c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, 1, c); //W
        s.addVector(-1, -1, c);
        s.addVector(0, 0, c);
        s.addVector(1, -1, c);
        s.addVector(1, 1, c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, 1, c); //X
        s.addVector(1, -1, c);
        s.addVector(0, 0, c);
        s.addVector(1, 1, c);
        s.addVector(-1, -1, c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, 1, c); //Y
        s.addVector(0, 0, c);
        s.addVector(1, 1, c);
        s.addVector(0, 0, c);
        s.addVector(0, -1, c);
        shapes.push( s);
        s = new Shape();

        s.addVector(-1, 1, c); //Z
        s.addVector(1, 1, c);
        s.addVector(-1, -1, c);
        s.addVector(1, -1, c);
        
        shapes.push( s);
    }
    
    renderText(thetext,x, y, rotate, scalex, scaley)
    {
        var s = new Shape();
        for(var i=0;i<thetext.length;i++)
        {
            switch (thetext.charAt(i))
            {
                case "0":
                    s = shapes[0];
                break;
                case "1":
                    s = shapes[1];
                break;
                case '2':
                    s = shapes[2];
                break;
                case '3':
                    s = shapes[3];
                break;
                case '4':
                    s = shapes[4];
                break;
                case '5':
                    s = shapes[5];
                break;
                case '6':
                    s = shapes[6];
                break;
                case '7':
                    s = shapes[7];
                break;
                case '8':
                    s = shapes[8];
                break;
                case '9':
                    s = shapes[9];
                break;
                case 'A':
                case 'a':
                    s = shapes[10];
                    break;
                case 'B':
                case 'b':
                    s = shapes[11];
                    break;
                case 'C':
                case 'c':
                    s = shapes[12];
                    break;
                case 'D':
                case 'd':
                    s = shapes[13];
                    break;
                case 'E':
                case 'e':
                    s = shapes[14];
                    break;
                case 'F':
                case 'f':
                    s = shapes[15];
                    break;
                case 'G':
                case 'g':
                    s = shapes[16];
                    break;
                case 'H':
                case 'h':
                    s = shapes[17];
                    break;
                case 'I':
                case 'i':
                    s = shapes[18];
                    break;
                case 'J':
                case 'j':
                    s = shapes[19];
                    break;
                case 'K':
                case 'k':
                    s = shapes[20];
                    break;
                case 'L':
                case 'l':
                    s = shapes[21];
                    break;
                case 'M':
                case 'm':
                    s = shapes[22];
                    break;
                case 'N':
                case 'n':
                    s = shapes[23];
                    break;
                case 'O':
                case 'o':
                    s = shapes[24];
                    break;
                case 'P':
                case 'p':
                    s = shapes[25];
                    break;
                case 'Q':
                case 'q':
                    s = shapes[26];
                    break;
                case 'R':
                case 'r':
                    s = shapes[27];
                    break;
                case 'S':
                case 's':
                    s = shapes[28];
                    break;
                case 'T':
                case 't':
                    s = shapes[29];
                    break;
                case 'U':
                case 'u':
                    s = shapes[30];
                    break;
                case 'V':
                case 'v':
                    s = shapes[31];
                    break;
                case 'W':
                case 'w':
                    s = shapes[32];
                    break;
                case 'X':
                case 'x':
                    s = shapes[33];
                    break;
                case 'Y':
                case 'y':
                    s = shapes[34];
                    break;
                case 'Z':
                case 'z':
                    s = shapes[35];
                    break;
                default:
                    s = null;
                    break;



            }
            if(s!=null)
            {
                s.init();
                s.rotate(rotate);
                s.scale(scalex, scaley);
                s.translate(x+i*3*scalex, y);
            
                s.renderShape();
            }
        }
    }

}


// Add your code here
class Vector {
    constructor( x,  y, c) {
      this.x = x;
      this.y = y;
      this.c = c;
      
    }

}
class BoundingBox {
    constructor(minx, miny, maxx, maxy) {
      this.minx = minx;
      this.miny = miny;
      this.maxx = maxx;
      this.maxy = maxy;
    }
    width()
    {
      return this.maxx-this.minx;
    }
    height()
    {
      return this.maxy-this.miny;
    }
}
class Shape {
    
    constructor() {
        this.boundingBox = new BoundingBox(0, 0, 0, 0);
        this.renderVectors =  Array();
        this.vectors =  Array();   
        this.minx = 0;
        this.maxx = 0;
        this.miny = 0;
        this.maxy = 0;
        this.r = Math.floor(Math.random()*200+50);
        this.g = Math.floor(Math.random()*200+50);
        this.b = Math.floor(Math.random()*200+50);
        
    }
    getBoundingBox() {
        return this.boundingBox;
    }
    addVector(x, y, c) {
        var v1 = new Vector(x, y, c);
        var v2 = new Vector(x,y,c);
        this.vectors.push(v1);
        this.renderVectors.push(v2);
        if (x > this.maxx) {
            this.maxx = x;
            this.boundingBox.maxx = this.maxx;
        }
        if (y > this.maxy) {
            this.maxy = y;
            this.boundingBox.maxy = this.maxy;
        }

        if (x < this.minx) {
            this.minx = x;
            this.boundingBox.minx = this.minx;
        }

        if (y < this.miny) {
            this.miny = y;
            this.boundingBox.miny = this.miny;
        }

    }
    getVector(index)
    {
        return this.vectors[index];
    }

    init()
    {

        for (i = 0; i < this.vectors.length; i++)
        {
            this.renderVectors[i].x = this.vectors[i].x;
            this.renderVectors[i].y = this.vectors[i].y;
            this.renderVectors[i].c = this.vectors[i].c;
        }
    }
    rotate(theta) {
        var costheta = Math.cos(theta);
        var sintheta = Math.sin(theta);
        var x = 0;
        var y = 0;
        for (var j = 0; j < this.renderVectors.length; j++) {
            x = this.renderVectors[j].x;
            y = this.renderVectors[j].y;
            this.renderVectors[j].x = x * costheta - y * sintheta;
            this.renderVectors[j].y = x * sintheta + y * costheta;
        }
    }
    translate(x, y) {
        for (var k = 0; k < this.renderVectors.length; k++) {
            this.renderVectors[k].x = this.renderVectors[k].x + x;
            this.renderVectors[k].y = this.renderVectors[k].y + y;
        }
    }
    scale(x, y) {
        for (var l = 0; l < this.renderVectors.length; l++) {
            this.renderVectors[l].x = this.renderVectors[l].x * x;
            this.renderVectors[l].y = this.renderVectors[l].y * y;
        }
    }
    renderShape() {
      
      beginShape();
      
        for (var m = 0; m < this.renderVectors.length - 1; m++) {
          stroke(palette[this.renderVectors[m].c]);      
          //fill(  palette[this.renderVectors[m].c]);
            fill(color(this.r,this.g,this.b));
            vertex(this.renderVectors[m].x,height- this.renderVectors[m].y);
            vertex(this.renderVectors[m + 1].x,height- this.renderVectors[m + 1].y);
            //line( this.renderVectors[m].x,height- this.renderVectors[m].y,this.renderVectors[m + 1].x,height- this.renderVectors[m + 1].y);
           
        }
        endShape(CLOSE);


    }
    renderShapeDecomp(factor) {
        
        var f = 1-(factor/2000)%2000/2000.0;
        
        for (var m = 0; m < this.renderVectors.length - 1; m++) {
            var x1 = this.renderVectors[m].x*f;
            var y1 = this.renderVectors[m].y*f;
            var x2 = this.renderVectors[m+1].x*f;
            var y2 = this.renderVectors[m+1].y*f;
            stroke(palette[this.renderVectors[m].c]);
            line(
                x1,y1,x2,y2
            );

        }



    }

    drawBoundingBox(x, y, collision) {
      
      stroke(palette[2]);
        rect(x + this.minx, height - (y - this.miny), this.maxx - this.minx, this.maxy - this.miny);
    }
    clone() {
        var s = new Shape();
        for (var n = 0; n < this.vectors.length; n++) {
            s.addVector(this.vectors[n].x, this.vectors[n].y, this.vectors[n].c);
        }
        return s;
    }


}
const actorType = { PLAYER:0, BIG_ASTEROID:1, MEDIUM_ASTEROID:2, SMALL_ASTEROID:3, UFO:4, FLYING_SAUCER:5, };
class Particle {
    constructor( x,  y, vel, heading, lifetime) {
        this.heading=heading;
        this.vel = vel;
        this.vx = -vel * Math.sin(heading);
        this.vy = vel * Math.cos(heading);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.active = false;
    }
    setParameters( x,  y,  vel,  heading)
    {
        this.x = x;
        this.y = y;
        this.vel = vel;
        this.heading = heading;
        this.vx = -vel*Math.sin(heading);
        this.vy = vel*Math.cos(heading);
    }
    updatePosition() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.lifetime = this.lifetime - 1;
        if(this.lifetime<0)
        {
            this.active = false;
        }
    }
    
    
    setActive(active)
    {
        this.active = active;
        if(this.active)
        {
            this.vx = -this.vel*Math.sin(this.heading);
            this.vy = this.vel*Math.cos(this.heading);
        }
    }
    isActive()
    {
        return this.active;
    }
    render() {
        if(this.active)
        {
          stroke(palette[1]);
          circle(this.x, height - this.y, 1);
        }
    }
}
class Projectile {
     constructor(x, y,vel, heading, lifetime) {
        this.vx = -vel * Math.sin(heading);
        this.vy = vel * Math.cos(heading);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.active = true;
    }
    updatePosition() {
        this.x = this.x + this.vx;
        if (this.x > width) {
            this.x = this.x % width;
        }
        if (this.x < 0) {
            this.x = width + this.x;
        }
        this.y = this.y + this.vy;
        if (this.y > height) {
            this.y = this.y % height;
        }
        if (this.y < 0) {
            this.y = height + this.y;
        }
        this.lifetime = this.lifetime - 1;
        if(this.lifetime<0)
        {
            this.active = false;
        }
    }
    
    
    setActive(val) {
        this.active = val;
        if(this.active)
        {
            this.vx = -this.vel * Math.sin(this.heading);
            this.vy = this.vel * Math.cos(this.heading);
            
        }
    }
    isActive() {
        return this.active;
    }
    render() {
        if (this.active) {
          stroke(palette[1]);
            circle(this.x, height - this.y, 1);
        }
    }
}
class Actor {
    constructor(type,  x,  y, vel, heading) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.vx = vel * Math.sin(heading);
        this.vy = vel * Math.cos(heading);
        this.shapes = Array();
        this.currentShape = 0;
        this.particles = Array();
        this.projectiles = Array();
        this.maxProjectiles = 5;
        this.lastshoot = 0;
        this.drawBoundingBox = false;
        this.rotationalSpeed = (Math.random() - 0.5) * 0.3;
        this.active = false;
    }
    
    addShape(shape) {
        this.shapes.push( shape);
    }
    setShapes(shapes)
    {
        this.shapes = shapes;
    }
    
    setShape(index) {
        if (index >= 0 && index < this.shapes.length) {
            this.currentShape = index;
        }
    }
    
    thrust(v) {
        if(this.vel>=5)
        {
          return;
        }
        var vx = -v * Math.sin(this.heading);
        var vy = v * Math.cos(this.heading);

        this.vx = this.vx + vx;
        //this.vx = this.vx % 5;
        var pcount = 0;
        this.vy = this.vy + vy;
        //this.vy = this.vy % 5;
        
        for(var i=0;i<this.particles.length;i++)
        {
            if(!this.particles[i].isActive())
            {
                
                this.particles[i].x = this.x + this.vx;
                this.particles[i].y = this.y + this.vy;
                this.particles[i].vel = -v*(140+Math.random()*70);
                this.particles[i].heading = this.heading + (Math.random() - 0.5) * 0.8;
                this.particles[i].lifetime = 10;
                this.particles[i].setActive(true);
                pcount++;
                
            }
            if(pcount>5)
            {
              break;
            }
        }
        
    }
    shoot()
    {
        
        var vx2 = -50 * Math.sin(this.heading);
        var vy2 = 50 * Math.cos(this.heading);
        
        for(var i = 0;i<this.projectiles.length;i++)
        {
            if(!this.projectiles[i].isActive())
            {
                this.projectiles[i].x = this.x+vx2;
                this.projectiles[i].y = this.y+vy2;
                this.projectiles[i].heading = this.heading;
                this.projectiles[i].vel = this.vel+20;
                this.projectiles[i].vx = vx2+this.vx;
                this.projectiles[i].vy = vy2+this.vy;
                this.projectiles[i].lifetime = 60;
                this.projectiles[i].setActive(true);
                
               // music.pewPew.play();
                return;
            }
        }
            
            
        

    }
    rotate(rot) {
        this.heading = this.heading + rot;
    }
    updatePosition() {
        if (this.type == actorType.BIG_ASTEROID || this.type == actorType.MEDIUM_ASTEROID ) {
            this.rotate(this.rotationalSpeed);
        }
        this.x = this.x + this.vx;
        if (this.x > width) {
            this.x = this.x % width;
        }
        if (this.x < 0) {
            this.x = (width + this.x)%width;
        }
        this.y = this.y + this.vy;
        if (this.y > height) {
            this.y = this.y % height;
        }else 
        if (this.y < 0) {
            this.y = height-this.y;
        }
        
        for (var o = 0; o < this.particles.length; o++)
        {
            this.particles[o].updatePosition();
        }
        if(this.type == actorType.PLAYER)
        {
            for (var r = 0; r < this.projectiles.length; r++)
            {
                this.projectiles[r].updatePosition();
            }
        }

    }
    render() {
        if(this.isActive())
        {
            this.shapes[this.currentShape].init();
            this.shapes[this.currentShape].rotate(this.heading);
            this.shapes[this.currentShape].translate(this.x, this.y);


            this.shapes[this.currentShape].renderShape();
            if (this.drawBoundingBox) {
                this.shapes[this.currentShape].drawBoundingBox(this.x, this.y, true);
            }
        }
        for (var t = 0; t < this.particles.length; t++) {
            this.particles[t].render();
            if (this.particles[t].lifetime <= 0) {
                this.particles[t].setActive(false);
            }
        }
        for (var u = 0; u < this.projectiles.length; u++) {
            this.projectiles[u].render();
            if (this.projectiles[u].lifetime <= 0) {
                this.projectiles[u].setActive(false);
            }
        }

    }
    renderDeath(deathstart,now)
    {
        var particle_count= 0;
        var heading = Math.random()*2*Math.PI;
        for(var i=0;i<this.particles.length;i++)
        {
            if(!this.particles[i].isActive())
            {
                this.particles[i].setParameters(this.x, this.y, 5, heading);
                this.particles[i].setActive(true);
                particle_count++;
            }
            
        
            if(particle_count>5)
            {
                break;
            }
        }
        this.shapes[this.currentShape].init();
        this.shapes[this.currentShape].rotate(this.heading);
        this.shapes[this.currentShape].translate(this.x, this.y);

        var factor = now-deathstart;
        this.shapes[this.currentShape].renderShapeDecomp(factor);
    }
    getCurrentShape() {
        return this.shapes[this.currentShape];
    }
    collidesWith(otherActor)
    {
      var f1 = Math.abs(otherActor.x - this.x) * 2 < (otherActor.getCurrentShape().getBoundingBox().width()+this.getCurrentShape().getBoundingBox().width());
      var f2 = Math.abs(otherActor.y - this.y) * 2 < (otherActor.getCurrentShape().getBoundingBox().height() + this.getCurrentShape().getBoundingBox().height()); 
      return f1 && f2;

    }

    collidesWithProjectiles(projectiles) {
        for (var w = 0; w < projectiles.length; w++) {
            if(projectiles[w].isActive())
            {
            
                if(
                projectiles[w].x >= this.x + this.getCurrentShape().getBoundingBox().minx &&
                projectiles[w].x <= this.x + this.getCurrentShape().getBoundingBox().maxx &&
                projectiles[w].y >= this.y + this.getCurrentShape().getBoundingBox().miny &&
                projectiles[w].y <= this.y + this.getCurrentShape().getBoundingBox().maxy
                ) 
                {
                    projectiles[w].setActive(false);
                    return true;
                }
            }
        }
        return false;

    }
    getProjectileCount() {
        var c = 0;
        for(var i=0;i<this.projectiles.length;i++)
        {
            if(this.projectiles[i].isActive())
            {
                c++;
            }
        }
        return c;
        
        
    }
    getMaxProjectiles() {
        return this.maxProjectiles;
    }
    getProjectiles() {
        return this.projectiles;
    }
    setDrawBoundingBox(doDraw) {
        this.drawBoundingBox = doDraw;
    }
    setActive(active)
    {
        
        this.active = active;
        if(active)
        {
            this.vx = this.vel * Math.sin(this.heading);
            this.vy = this.vel * Math.cos(this.heading);
        }
    }
    isActive()
    {
        return this.active;
    }
    getActorType()
    {
        return this.type;
    }
    setActorType(newtype)
    {
        this.type = newtype;
    }
    initProjectiles(numprojectiles)
    {
        for(var i=0;i<numprojectiles;i++)
        {
            this.projectiles.push(new Projectile(0,0,0,0,0));
            this.projectiles[i].setActive(false);

            
        }
    }
    initParticles(numParticles)
    {
        for(var i=0;i<numParticles;i++)
        {
            var p = new Particle(0,0,0,0,0);
            p.setActive(false);
            
            this.particles.push(p);
        }
    }
    
}
const STATES = 
{
  INTRO:1,
  PLAYING:2,
  PLAYER_DIED:3, 
  GAME_OVER:4, 
};
var runtime = 0;
var state = STATES.INTRO;
var shapes = Array();
var actors = Array();
var asteroids = Array();
var vfont;
var score = 0;
var level = 0;
var lives = 3;
var debris = Array();
var asteroidshapes= Array();
var deathstart = 0;
var lives = 0;
var finished = false;
var xtry = 0;
var ytry = 0;
var player;
var fs ;
var zf;
var ufo;
var lastshoot;
var starttime;
var b = new Shape();
var c = 1;
var fscreen;
var astcount;
var interval=100;
function setup() {
  starttime = Date.now();
  frameRate(25);
  createCanvas(512 ,360);
  fscreen = fullscreen();
  background(0,0,0);
  palette = Array();
  palette.push(color(0,0,0));
  palette.push(color(255,255,255));
  palette.push(color(255,0,0));
  vfont = new VectorFont(1);
  player = new Actor(actorType.PLAYER, width / 2, height / 2, 0, 0);
  fs = new Actor(actorType.FLYING_SAUCER,Math.random()>0.5?0:width,Math.random()>0.5?0:height,2,Math.random()*2*Math.PI);
  ufo = new Actor(actorType.UFO, Math.random() > 0.5 ? 0 : width, Math.random() > 0.5 ? 0:height, 2,Math.random() * 2 * Math.PI);
  zf = width/200;
b.addVector(5*zf, -5*zf, c);
b.addVector(0, 5.5*zf, c);
b.addVector(-5*zf, -5*zf, c);
b.addVector(0, 0, c);
b.addVector(5*zf, -5*zf, c);
var fsshape = new Shape();
{
    fsshape.addVector(1.5*zf, 0, c);
    fsshape.addVector(0.5*zf, 0.5*zf, c);
    fsshape.addVector(-0.5*zf,0.5*zf,c);
    fsshape.addVector(-1.5*zf,0,c);
    fsshape.addVector(-0.5*zf, -0.5*zf, c);
    fsshape.addVector(0.5*zf, -0.5*zf, c );
    fsshape.addVector(1.5*zf, 0, c);
    fsshape.addVector(-1.5*zf,0,c);
}

createAsteroidShapes(asteroidshapes, 10, height/10, 1);
createAsteroidShapes(asteroidshapes, 10, height/15, 1);
createAsteroidShapes(asteroidshapes, 10, height/20, 1);
astcount = asteroidshapes.length/3;
player.addShape(b);
player.setShape(0);
player.setDrawBoundingBox(false);
player.initProjectiles(8);
player.initParticles(200);
for (i = 0; i <= 200; i++)
{
    asteroids[i] = new Actor(actorType.BIG_ASTEROID,0,0,0,0);
    asteroids[i].setShapes(asteroidshapes);
    asteroids[i].setActive(false);
}
for(i=0;i<200;i++)
{
    debris[i] = new Particle(0,0,0,0,0);
    debris[i].setActive(false);
}
initGame();


}



function initGame () {
    level = 0;
    lives = 3;
    score = 0;
    lastshoot = 0;
    createAsteroids(asteroids, 8);
player.x = width/2;
player.y = height/2;
player.vel = 0;
player.heading = 0;
player.setActive(true);

//player.addShape(b)
player.setShape(0);
player.setDrawBoundingBox(false);
}
function respawn () {
    finished = true;
    xtry = Math.random() * width / 32;
    ytry = Math.random() * height / 32;
    do
    {
        xtry = Math.random() * width / 32;
        ytry = Math.random() * height / 32;
        for(let l=0;l<asteroids.length;l++)
        {
            if(!asteroids[l].isActive())
            {
                continue;
            }
            if(asteroids[l].x/32 == xtry && asteroids[l].y/32 == ytry)
            {
                finished = false;
                break; 
            }
        }

    }while(!finished);  
    player.x = xtry;
    player.y = ytry;  
}
function getAsteroidCount()
{
    var c=0;
    for( i=0;i<asteroids.length;i++)
    {
        if(asteroids[i].isActive())
        {
            c++;
        }
    }
    return c;
}

function displayScore(thefont, score, x, y, rot, scalex, scaley )
{
    var txtscore = ""+score;
    while(txtscore.length<6)
    {
        txtscore = "0"+txtscore;
    }
    txtscore = txtscore+"    "+level;
    thefont.renderText(txtscore, x, y, rot, scalex,scaley);
    //thefont.renderText(""+level, x+ 6*10+20,y,rot, scalex,scaley);
}
function displayLives(ship,lives, x, y, rot, scalex, scaley)
{
    for(j=0;j<lives;j++)
    {
        ship.init();
        ship.rotate(rot);
        ship.scale(scalex, scaley);
        ship.translate(x+j*scalex*(ship.maxx-ship.minx),y);
        
        ship.renderShape();
    }
}
function createAsteroidShapes(asteroids, count, dimensions, color)
{
    for(var z=0;z<count;z++)
    {
        
        var a = new Shape();
        {
            var asteroid = new Shape();
            
            for (var angle = 0; angle < (2.0 * Math.PI); angle = angle + (2.0 * Math.PI) / (dimensions+4))
            {
                asteroid.addVector(Math.cos(angle) * dimensions + (Math.random()-0.5) * Math.cos(angle) * dimensions*0.5, Math.sin(angle)*dimensions+(Math.random()-0.5)*Math.cos(angle)*dimensions*0.5, color);
            }
            asteroid.addVector(asteroid.getVector(0).x,asteroid.getVector(0).y,asteroid.getVector(0).c);
            asteroids.push(asteroid);            
        }        
    }
}
function createDebris(x,y,vel,heading,count) {
    var c=0;
    let offset = Math.random()*2*Math.PI;
    for(var i=0;i<debris.length;i++)
    {
        if(!debris[i].isActive())
        {
            debris[i].x = x;
            debris[i].y = y;
            debris[i].vel = 5;
            debris[i].heading = offset + (c*2*Math.PI)/count;
            debris[i].lifetime = 5;
            debris[i].setActive(true);
            c++;
        }
    }
}
function createAsteroidsFromAsteroid(asteroid,  asteroidCount)
{
    asteroid.setActive(false);
    var d = 0;
    switch(asteroid.type)
    {
        case actorType.BIG_ASTEROID:
            score = score + 1;
            for(var h=0;h<asteroidCount;h++)
            {
                if(!asteroids[h].isActive())
                {
                    asteroids[h].setActorType(actorType.MEDIUM_ASTEROID);
                    asteroids[h].x = asteroid.x + Math.cos(asteroid.heading) * 10;
                    asteroids[h].y = asteroid.y + Math.sin(asteroid.heading) * 10;
                    asteroids[h].vel = asteroid.vel * 1.2;
                    asteroids[h].heading = asteroid.heading + 2 * d * (Math.PI / asteroidCount);
                    
                    asteroids[h].setShape(astcount+Math.floor(Math.random() * (astcount-1)));
                    asteroids[h].setActive(true);
                    createDebris(asteroid.x, asteroid.y, asteroid.vel, asteroid.heading,Math.random()*3+3);
                    d++;
                    if(d>3)
                    {
                        break;
                    }
                }
                
            }
        break;
        case actorType.MEDIUM_ASTEROID:
            score = score + 3;
            for (var k = 0; k < asteroidCount; k++) {
                if (!asteroids[k].isActive()) {
                    asteroids[k].setActorType(actorType.SMALL_ASTEROID);
                    asteroids[k].x = asteroid.x + Math.cos(asteroid.heading) * 10;
                    asteroids[k].y = asteroid.y + Math.sin(asteroid.heading) * 10;
                    asteroids[k].vel = asteroid.vel * 1.4;
                    asteroids[k].heading = asteroid.heading + 2 * d * (Math.PI / asteroidCount);
                    asteroids[k].setShape(2*astcount+Math.floor(Math.random() * (astcount-1)));
                    asteroids[k].setActive(true);
                    createDebris(asteroid.x, asteroid.y, asteroid.vel, asteroid.heading, 5);

                    d++;
                    if(d>3)
                    {
                        break;
                    }
                }

            }
        break;
        case actorType.SMALL_ASTEROID:
            createDebris(asteroid.x, asteroid.y, asteroid.vel, asteroid.heading, 3);

            score = score + 5;
        break;
    }
    

}
function createAsteroids(asteroids, numasteroids) {
    var x2 = 0;
    var y2 = 0;
    var c2 = 0;
    var asteroidcount = 0;
    for (var i3 = 0; i3 < asteroids.length; i3++) {
        if(!asteroids[i3].isActive())
        {

            c2 = Math.floor(Math.random() * 3);
            switch (c2) {
                case 0:
                    x2 = Math.random() * width / 3;
                    y2 = Math.random() * height / 20 -height/40;
                break;
                case 1:
                    x2 = Math.random() * width / 3 + width / 3;
                    y2 = Math.random() * height / 20 - height/40;
                    break;
                case 2:
                    x2 = Math.random() * width / 3 + (2 * width / 3);
                    y2 = Math.random() * height / 20 - height/40;
                    break;
                case 3:
                    x2 = Math.random() * width / 10 + width / 20;
                    y2 = Math.random() * height / 3 + height / 3;
                    break;
                case 4:
                    x2 = Math.random() * width / 10 - (2 * width / 20);
                    y2 = Math.random() * height / 3 + height / 3;
                    break;
                case 5:
                    x2 = Math.random() * width / 3;
                    y2 = Math.random() * height - Math.random()*  (height/40);
                    break;
                case 6:
                    x2 = Math.random() * width / 3 + width / 3;
                    y2 = height - Math.random() * height/40;
                    break;
                case 7:
                    x2 = Math.random() * width / 3 + width / 3;
                    y2 = height - Math.random()* height/40;
                    break;
            }
        }
        
        asteroids[i3].setActorType(actorType.BIG_ASTEROID);
        asteroids[i3].x = x2;
        asteroids[i3].y = y2;
        asteroids[i3].vel = Math.random()+0.1;
        asteroids[i3].heading = Math.random() * 2 * Math.PI;
        asteroids[i3].setShape(c2);
        asteroids[i3].setDrawBoundingBox(false);
        asteroids[i3].setActive(true);
        asteroidcount++;
        if(asteroidcount>=numasteroids)
        {
            return;
        }
    }
    
}
function draw () {
    background(0,0,0);
    runtime = Date.now()-starttime; 
    updateGame();
    displayScore(vfont, score, width/10, height-height/20, 0, 3*zf, 5*zf);
    displayLives(b,lives,10,height-30,0,0.5,0.5);
    vfont.renderText("Y="+player.y,300,300,0,3,3);
    vfont.renderText("t="+runtime,400,400,0,5,5);
    if (state == STATES.INTRO)
    {
        vfont.renderText("VECTOR", width/10, height-height/4,0,5.8*zf,8*zf);
        vfont.renderText("    BY BOKONTEP", width/10,height/1.7,0,2*zf,3*zf);
        vfont.renderText("PRESS CTRL TO PLAY", width/4, height/3,0,2*zf,3*zf);
    }
    if(state == STATES.GAME_OVER)
    {
        if(runtime%2*interval<interval)
        {
          interval = 500+Math.random()*10000.0;
          vfont.renderText("GAME OVER", width-5.8*zf*9*3.5, height/2, 0, 5.8*zf, 8*zf);
        }
        else
        {
          vfont.renderText("37707", interval%50+ width-5.8*zf*9*3.5, height/2, 0, 5.8*zf, 8*zf);
        }
        
    }
    if(state == STATES.PLAYER_DIED)
    {
        player.getCurrentShape().init();
        var f = ((runtime- deathstart)/2000);
        player.getCurrentShape().rotate(f*2*Math.PI);
        player.getCurrentShape().scale(1 - f, 1 - f);
        player.getCurrentShape().translate(player.x, player.y);
        
        player.getCurrentShape().renderShape();

    }
    if(state == STATES.PLAYING || state == STATES.INTRO)
    {
        player.render();
    }
    for(var m=0;m<asteroids.length;m++)
    {

        asteroids[m].render();
    }
    for(var i=0;i<debris.length;i++)
    {
        if(debris[i].isActive())
        {
            debris[i].render();
        }
    }
    
}
function updateGame() {
    for(var i=0;i<debris.length;i++)
    {
        debris[i].updatePosition();
    }
    if(keyIsDown(70) || keyIsDown(102))
    {
      fscreen = fullscreen(!fscreen);
    }
    if (state == STATES.PLAYING)
    {
        if (keyIsDown(RIGHT_ARROW)) {
            player.rotate(-(2*Math.PI)/60.0);
        }
        if (keyIsDown(LEFT_ARROW)) {
            player.rotate((2 * Math.PI) / 60.0);
        }
        if (keyIsDown(UP_ARROW)) {
            player.thrust(0.1);
        }
        if (keyIsDown(32)) {
          
          if(runtime-lastshoot>200)
          {
            lastshoot = runtime;
            player.shoot();
          }
        }
        player.updatePosition();
        for (let n = 0; n <= asteroids.length - 1; n++)
        {
            if (asteroids[n].isActive())
            {
                asteroids[n].updatePosition();
                if (asteroids[n].collidesWith(player))
                {
                    asteroids[n].setDrawBoundingBox(false);
                    lives = lives - 1;
                    deathstart = runtime;
                    state = STATES.PLAYER_DIED;
                    //music.jumpDown.play();
                    break;
                }
                if (asteroids[n].collidesWithProjectiles(player.getProjectiles()))
                {
                    //music.baDing.play();
                    createAsteroidsFromAsteroid(asteroids[n], 3);
                    if(getAsteroidCount()==0)
                    {
                        level = level+1;
                        if(level<10)
                        {
                            createAsteroids(asteroids, level+8);
                        }
                        else if(level>=10 && level<20)
                        {
                            createAsteroids(asteroids,2*level);
                        }
                        else if (level>=20 && level<30)
                        {
                            createAsteroids(asteroids, 3*level);
                        }
                        else if (level>=30 )
                        {
                            createAsteroids(asteroids, 4*level);
                        }
                    }
                }
            }
            
        }
    }
    if (state == STATES.GAME_OVER)
    {
        for ( i = 0; i <= asteroids.length - 1; i++) {
            if (asteroids[i].isActive()) {
                asteroids[i].updatePosition();
            }

        }
        if (keyIsDown(32))
        {
            state = STATES.INTRO;
            interval = 100
            //pause(500);
            return;
        }
    }
    if (state == STATES.INTRO)
    {
       
        player.updatePosition();
        for ( i = 0; i <= asteroids.length - 1; i++)
        {
            if (asteroids[i].isActive())
            {
                asteroids[i].updatePosition();
            }
            
            if (keyIsDown(CONTROL))
            {
                initGame();
                state = STATES.PLAYING;
            }
        }
    }
    if (state == STATES.PLAYER_DIED)
    {
        player.updatePosition();
        for (i = 0; i < asteroids.length ; i++) {
            asteroids[i].updatePosition();
        }
        if (runtime - deathstart > 2000)
        {
            if (lives > 0)
            {
                state = STATES.PLAYING;
                respawn();
            }
            else
            {
                state = STATES.GAME_OVER;
                //music.powerDown.play();
            }
        }
    }
    //pause(40);
}
