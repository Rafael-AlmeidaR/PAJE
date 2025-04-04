class Entity 
{   constructor(x, y, width, height)
    {   this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    collide(entity)
    {   return (entity.x + entity.width >= this.x &&     
        entity.x <= this.x + this.width &&       
        this.y + this.height >= entity.y &&       
        this.y <= entity.y + entity.height);
    }
}
class GameEntity extends Entity
{   constructor(x, y, width, height, img)
    {   super(x, y, width, height)
        this.img = new Image;
        this.img.src = img;
    }
    draw()
    {   context.drawImage(this.img,this.x, this.y, this.width, this.height)
    }
}