class Castle extends GameEntity
{   constructor(x, y, width, height, img)
    {   super(x, y, width, height, img)
        this.MaxhpO = 100;
        this.hp = this.MaxhpO;
        this.defenseO = 1;
        this.invencibilityO = 0;
        this.thornsO = 0;
        this.castleContructor();
    }
    draw()
    {   super.draw();
        context.fillStyle = "lightgray"
        context.fillRect(this.x-1, this.y - 33, this.width+2, 18)

        context.fillStyle = "red";
        context.fillRect(this.x, this.y - 32, this.width*this.hp/this.Maxhp, 16)
    }
    castleContructor()
    {   let hpP = this.hp*100/(this.Maxhp != undefined ? this.Maxhp : this.MaxhpO)
        this.Maxhp = this.MaxhpO+(menuStatus.upgrades[4].effect+gameStatus.upgrades[4].effect);
        this.hp = this.Maxhp*(hpP/100);
        this.defense = this.defenseO-(menuStatus.upgrades[6].effect+gameStatus.upgrades[6].effect);
        this.invencibility = this.invencibilityO+(menuStatus.upgrades[9].effect+gameStatus.upgrades[9].effect);
        this.thorns = this.thornsO+(menuStatus.upgrades[12].effect+gameStatus.upgrades[12].effect);
    }
}