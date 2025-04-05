class Projectile extends Entity
{   constructor(x, y, width, height,img, mouse, speed, fireSetChance)
    {   super();
        this.x = x;
        this.y = y;
        this.mouse = mouse != undefined ? mouse : 0;
        this.xVelocity;
        this.xVelocity;
        this.speed = speed;
        this.img = new Image;
        this.img.src = img;
        
        this.width = width;
        this.height = height;
        this.xVelocity = this.speed*this.mouse.x/this.mouse.h;
        this.yVelocity = this.speed*this.mouse.y/this.mouse.h;
        this.fireSetChance = fireSetChance;
        weapon.sound.play();
    }
    draw()
    {   context.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    update()
    {   this.y += this.yVelocity;
        this.x += this.xVelocity;
    }
    collide(entity)
    {   for (let i = 0; i < entity.length && projectiles.Allprojectiles.length > 0; i++) 
        {   if(super.collide(entity[i]))
            {   sounds.enemyHit.currentTime = .9;
                sounds.enemyHit.play();
                let critical = Math.ceil(Math.random()*100);
                let lifeSteal = Math.ceil(Math.random()*100);
                let fire = Math.ceil(Math.random()*100)
                if(lifeSteal <= weapon.lifeStealChance) 
                {   if(castle.hp >= castle.Maxhp)
                    {   castle.hp = castle.Maxhp;
                    }
                    else
                    {   let hpSum = entity[i].hp*weapon.lifeStealAmount*(1+(critical <= weapon.critChance));
                        castle.hp += hpSum > castle.hp *.1 ? castle.hp*.1 : hpSum;
                        console.log(weapon.lifeStealAmount, 1+(critical <= weapon.critChance))
                    }
                }
                entity[i].hp -= weapon.damage*(critical <= weapon.critChance ? weapon.critDamage : 1);
                entity[i].knockback = weapon.knockback;
                if(fire <= this.fireSetChance)
                {   entity[i].burningDamage = weapon.damage/10;
                    entity[i].burningTime = 30;
                    entity[i].pos = i;
                }
                if(entity[i].hp <= 0)
                {   entity[i].death();
                    if(entity[i].type == 1)
                    {   waveController.totalBossA -= 1;
                    }
                    enemys.list.splice(i, 1)
                }
                return true;
            }
        }
    }
}
class Slash extends Projectile
{   constructor(x, y, width, height, mouse)
    {   super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.mouse = mouse;
        this.speed = 6*canvas.height/767;
        this.range = FPS;
        this.xVelocity = this.speed*this.mouse.x/this.mouse.h;
        this.yVelocity = this.speed*this.mouse.y/this.mouse.h;
        this.accX = (this.xVelocity*100/this.mouse.x)/this.range;
        this.accY = (this.yVelocity*100/this.mouse.y)/this.range;
        this.img = new Image;
        this.img.src = "imgs/slash.png";
    }
    update()
    {   super.update();
        this.xVelocity -= this.accX*Math.sign(this.xVelocity);
        this.yVelocity -= this.accY*Math.sign(this.yVelocity);
        this.range--;
    }
}
class EnemyProjectile extends Entity
{   constructor(x, y, damage)
    {   super(x, y, 5, 10)
        this.speed = 10;
        this.damage = damage*castle.defense;
        this.color = "red";
    }
    draw()
    {   context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height)
    }
    update()
    {   this.y += this.speed;
    }
}

/*

música
som dano

*/