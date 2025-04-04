class Coin extends GameEntity
{   constructor(x, y, coinsAmount)
    {   super(x, y, 32, 32, "imgs/moeda.png")
        this.timer = 0;
        this.coinsAmout = coinsAmount;
    }
    draw()
    {   super.draw();
        txt(this.x + 40, this.y+this.width/2, "+"+this.coinsAmout, 20, "#fffc64")
    }
    update()
    {   this.timer++;
    }
}
class Item extends Coin
{   constructor(i)
    {   super();
        this.timer = -30;
        this.img = new Image;
        console.log(i)
        this.img.src = menuStatus.inventory[i].img;
    }
    draw()
    {   txt(canvas.width/2-canvas.width*.035, canvas.height*.125, "Novo item desbloqueado:", 40, "black")
        context.drawImage(this.img,canvas.width/2 + canvas.width*.125, canvas.height*.125-16, 32, 32)
    }
}