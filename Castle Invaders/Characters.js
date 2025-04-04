class Character extends GameEntity
{   constructor(x, y, width, height, img)
    {   super(x, y, width, height, img)
        this.speed = 10;
        this.up = keys.keyUp;
        this.down = keys.keyDown;
        this.right = keys.keyRight;
        this.left = keys.keyLeft;
    }
    update()
    {   this.x += (((keysP[keys.keyRight])*((this.x+this.width)<(castle.x+castle.width)))-((keysP[keys.keyLeft])*this.x>castle.x))*this.speed;
        this.y += (((keysP[keys.keyDown])*(this.y+this.height < canvas.height))-((keysP[keys.keyUp])*this.y > castle.y))*this.speed;
        weapon.y = this.y-weapon.height;
        weapon.x = this.x;
    }
}