class Enemys
{   constructor()
    {   
        this.list = [
            new Enemy1(200, -192),
            new Enemy1(500, -128),
            new Enemy1(900, -96),
            new Enemy1(1100, -96)
            // new Enemy1(600, 600),
            // new Enemy1(600, 600),
            // new Enemy1(600, 600),
            // new Enemy1(600, 600)
            ];
        
        // this.list = [];
        this.coins = [];
        this.bullets = [];
    }
    update()
    {   for(let i = 0; (i < this.list.length); i++)
        {   this.list[i].update();  
            if(!this.list[i].dead)
            {   this.list[i].draw();  
            }
        }
        for (let i = 0; i < this.coins.length; i++) {
            if(this.coins[i].timer >= 30)
            {   this.coins.splice(i, 1)
                i--;
            }
            else
            {   this.coins[i].update();
                this.coins[i].draw();
            }
        }
        for(let i = 0; (i < this.bullets.length); i++)
        {   this.bullets[i].update();
            this.bullets[i].draw();
            if(this.bullets[i].collide(castle))
            {   castle.hp -= this.bullets[i].damage;
                sounds.hit.play();
                this.bullets.splice(i ,1)
            }
        }
    }
}