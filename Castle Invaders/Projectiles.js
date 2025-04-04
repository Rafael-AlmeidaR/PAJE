class Projectiles 
{   constructor()
    {   this.Allprojectiles = [];
    }
    draw()
    {   for (let i = 0; i < this.Allprojectiles.length; i++) 
        {   this.Allprojectiles[i].draw()
        }
    }
    update()
    {   for (let i = 0; i < this.Allprojectiles.length; i++) 
        {   if((this.Allprojectiles[i].x > innerWidth || this.Allprojectiles[i].x+this.Allprojectiles[i].radius*2 < 0) || ((this.Allprojectiles[i].y > innerHeight || this.Allprojectiles[i].y-this.Allprojectiles[i].radius*2 < 0)) || this.Allprojectiles[i].collide(enemys.list) || this.Allprojectiles[i].range == 0)
            {   this.Allprojectiles.splice(i, 1)
                i--;
            }
            else
            {   this.Allprojectiles[i].update();
            }
        }
    }
}