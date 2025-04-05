class Enemy extends GameEntity
{   constructor(x, y, width, height, img)
    {   super(x, y, width, height, img)
        this.knockback = false;
        this.knockbackT = 2;
        this.stop = false;
        this.stepPoint = {x: Math.round(castle.x+castle.width/2), y: castle.y}
        this.h = Math.sqrt(((this.x-this.stepPoint.x)**2)+((this.stepPoint.y-this.y)**2))
        this.xVelocity = this.speed*(this.x-this.stepPoint.x)/this.h;
        this.yVelocity = this.speed*(this.stepPoint.y-this.y)/this.h;
        this.drops = [];
        this.coinsDrop = 1;
        this.type = 0;
        this.burningDamage = 0;
        this.burningTime = 0;
        this.pos = -1;
        this.coinDropChance = (20*difficult)+(menuStatus.upgrades[5].effect+gameStatus.upgrades[5].effect);
        // this.coinDropChance = 100;
        this.dead = false;
    }
    
    update()
    {   this.cooldown -= this.cooldown > 0;
        if(this.stop == false)
        {   if(!super.collide(castle) || this.knockback != false)
            {   this.h = Math.sqrt(((this.x-this.stepPoint.x)**2)+((this.stepPoint.y-this.y)**2))
                this.xVelocity = Math.round(this.speed*(this.x-this.stepPoint.x)/this.h);
                this.yVelocity = Math.round(this.speed*(this.stepPoint.y-this.y)/this.h);
                this.x -= (this.xVelocity*(this.knockback==false))-(this.knockback*Math.sign(this.xVelocity));
                this.y += (this.yVelocity*(this.knockback==false))-this.knockback;
            }
            else
            {   if(this.cooldown <= 0)
                {   sounds.hit.play();
                    castle.hp -= this.damage*castle.defense;  
                    let thorns = Math.ceil(Math.random()*100);
                    if(thorns <= castle.thorns)
                    {   this.hp -= this.damage;
                    }
                    this.cooldown = this.attackSpeed+castle.invencibility;
                }
            }
        }
        else
        {   if(this.cooldown <= 0)
            {   this.fire();
                this.cooldown = this.attackSpeed+castle.invencibility;
            }
        }
        if(this.knockback != false)
        {   this.knockbackT--;
            if(this.knockbackT < 0)
            {   this.knockback = false;
                this.stop = false;
            }
        }
        if(castle.hp <= 0)
        {   sounds.death.play();
            finalT = 1;
            MenuOptions = -1; 
            buttons = [new EndGameButton(canvas.width*.3, canvas.height*.75, canvas.width*.4, canvas.height*.1, "VOLTAR PARA O MENU")]
            clearInterval(timer)
            timer = setInterval(finalScreen, 1000/FPS);
        }
        if(this.burningTime > 0)
        {   if(Math.random() >= 1)
            {   this.burningDamage = 0;
                this.burningTime = 0;
            }
            else
            {   if(this.burningTime%3 == 0)
                {   this.hp-=this.burningDamage;
                    if(this.hp <= 0)
                    {   this.death();
                        this.hp = 0;
                        enemys.list.splice(this.pos, 1)
                    }
                }
            }
        }
        this.burningTime--;
    }
    death()
    {   let dC = Math.trunc(Math.random()*100)
        this.dead = true;
        if(dC < this.coinDropChance && cheatCodes[0]==false)
        {   gameStatus.gameCoins+=this.coinsDrop;
            enemys.coins.push(new Coin(this.x, this.y, this.coinsDrop))
        }
        for(let i = 0; (i < this.drops.length); i++)
        {   if(this.drops[i].unlock.unlocked != 1 && cheatCodes[0]==false)
            {   let drop = Math.random();
                if(drop < this.drops[i].dropChance)
                {  enemys.coins.push(new Item(menuStatus.inventory.indexOf(this.drops[i].unlock)))
                    this.drops[i].unlock.unlocked = 1;
                }
            }
            
        }
    }
    draw()
    {   super.draw();
        if(this.burningTime > 0)
        {   let iF = new Image;
            iF.src = "imgs/grimore.png"
            context.drawImage(iF, this.x, this.y, this.width, this.height)
        }
    }
}
class Enemy1 extends Enemy
{   constructor(x, y)
    {   super(x, y, 96, 96, "imgs/enemy.png")
        this.speed = 4;
        this.Maxhp = (100*difficult)*gameStatus.waveBooster;
        this.hp = this.Maxhp;
        this.damage = (10*difficult)*gameStatus.waveBooster;
        this.cooldown = 0;
        this.attackSpeed = Math.round((60/(difficult-1>0 ? difficult : 1))/gameStatus.waveBooster);
        this.attackSpeed = (this.attackSpeed < 20 ? 20 : this.attackSpeed)+castle.invencibility;
        this.drops = [{dropChance: .005, unlock: menuStatus.inventory[1]}]
    }
}
class Enemy2 extends Enemy
{   constructor(x, y)
    {   super(x, y, 64, 64, "imgs/enemy2.png")
        this.speed = 5;
        this.Maxhp = (50*difficult)*gameStatus.waveBooster;
        this.hp = this.Maxhp;
        this.damage = (6*difficult)*gameStatus.waveBooster;
        this.cooldown = 0;
        this.attackSpeed = Math.round((45/(difficult-1>0 ? difficult : 1))/gameStatus.waveBooster);
        this.attackSpeed = (this.attackSpeed < 15 ? 15 : this.attackSpeed)+castle.invencibility;
        this.coinsDrop = 2;
    }
}
class Enemy3 extends Enemy
{   constructor(x, y)
    {   super(x, y, 96, 96, "imgs/enemy3.png")
        this.stepPoint.y = Math.round(castle.y-canvas.height*0.35);
        this.stepPoint.x -= this.width/2;
        this.speed = 4;
        this.Maxhp = (75*difficult)*gameStatus.waveBooster;
        this.hp = this.Maxhp;
        this.damage = (3*difficult)*gameStatus.waveBooster;
        this.cooldown = 0;
        this.attackSpeed = Math.round((40/(difficult-1>0 ? difficult : 1))/gameStatus.waveBooster);
        this.attackSpeed = (this.attackSpeed < 10 ? 10 : this.attackSpeed)+castle.invencibility;
        this.drops = [{dropChance: .001, unlock: menuStatus.inventory[2]}]
        this.coinsDrop = 3;
    }
    update()
    {   super.update()
        if(this.y >= this.stepPoint.y-6 && this.y <= this.stepPoint.y+6  && this.knockback == false)
        {   this.stop = true;
        }
        else
        {   this.stop = false;
        }
    }
    fire()
    {   enemys.bullets.push(new EnemyProjectile(this.x+this.width/2, this.y+this.height, this.damage));
    }
}
class Enemy4 extends Enemy
{   constructor(x, y)
    {   super(x, y, 192, 192, "imgs/enemy4.png");
        this.stepPoint.x -= this.width/2;
        this.speed = 6;
        this.Maxhp = (1000*difficult)*gameStatus.waveBooster;
        this.hp = this.Maxhp;
        this.damage = (50*difficult)*gameStatus.waveBooster;
        this.cooldown = 0;
        this.attackSpeed = Math.round((10/(difficult-1>0 ? difficult : 1))/gameStatus.waveBooster);
        this.attackSpeed = (this.attackSpeed < 5 ? 5 : this.attackSpeed)+castle.invencibility;
        this.coinsDrop = 100;
        if(difficult > .5)
        {   this.coinsDrop *= ((difficult/.5)*10);
        }
        this.type = 1;
    }
}