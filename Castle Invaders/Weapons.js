class Weapon extends GameEntity
{   constructor(x, y, width, height, img)
    {   super(x, y, width, height, img)
        this.projectileRO;
        this.ProjectileSO;
        this.damageO;
        this.OfireRateO;
        this.critChanceO;
        this.critDamageO;
        this.lifeStealChanceO;
        this.lifeStealAmountO;
        this.knockbackO;
        this.setFireChance = 0;
        this.sound;
    }
    shoot(mouseCords)
    {   this.sound.currentTime = 0;
        projectiles.Allprojectiles.push(new Projectile(this.x+this.width/2, this.y, this.projectileR, mouseCords, this.ProjectileS, "cyan", this.setFireChance))
    }
    update()
    {   this.fireRate -= this.fireRate>0;
    }
    weaponsConstructor()
    {   this.projectileR = this.projectileRO*(menuStatus.upgrades[2].effect+gameStatus.upgrades[2].effect);
        this.ProjectileS = this.ProjectileSO+(menuStatus.upgrades[3].effect+gameStatus.upgrades[3].effect);
        this.damage = this.damageO*(menuStatus.upgrades[1].effect+gameStatus.upgrades[1].effect);
        this.fireRate = 0;
        this.OfireRate = Math.round(this.OfireRateO/(menuStatus.upgrades[0].effect+gameStatus.upgrades[0].effect));
        this.critChance = this.critChanceO+(menuStatus.upgrades[7].effect+gameStatus.upgrades[7].effect);
        this.critDamage = this.critDamageO+(menuStatus.upgrades[8].effect+gameStatus.upgrades[8].effect);
        this.lifeStealChance = this.lifeStealChanceO+(menuStatus.upgrades[10].effect+gameStatus.upgrades[10].effect);
        this.lifeStealAmount = this.lifeStealAmountO+(menuStatus.upgrades[11].effect+gameStatus.upgrades[11].effect);
        this.knockback = this.knockbackO+(menuStatus.upgrades[13].effect+gameStatus.upgrades[13].effect);
    }
}
class Bow extends Weapon
{   constructor(x, y, width, height)
    {   super(x, y, width, height, "imgs/bow.png")
        this.projectileRO = 5;
        this.ProjectileSO = 12;
        this.damageO = 50;
        this.OfireRateO = 22;
        this.critChanceO = 10;
        this.critDamageO = 2;
        this.lifeStealChanceO = 0;
        this.lifeStealAmountO = .01;
        this.knockbackO = 0;
        this.sound = sounds.slingshot;
        this.weaponsConstructor();
    }
}
class Sword extends Weapon
{   constructor(x, y, width, height)
    {   super(x, y, width, height, "imgs/sword.png")
        this.projectileRO = 5;
        this.damageO = 100;
        this.OfireRateO = 11;
        this.critChanceO = 10;
        this.critDamageO = 2;
        this.lifeStealChanceO = 0;
        this.lifeStealAmountO = .01;
        this.knockbackO = 0;
        this.sound = sounds.slash;
        this.weaponsConstructor();
    }
    shoot(mouseCords)
    {   this.sound.pause();
        projectiles.Allprojectiles.push(new Slash(this.x+this.width/2-this.projectileR*5, this.y-this.projectileR*5, this.projectileR*10, this.projectileR*5, mouseCords, this.ProjectileS))
    }
}
class Ak47 extends Weapon
{   constructor(x, y, width, height)
    {   super(x, y, width, height, "imgs/gun.png")
        this.projectileRO = 5;
        this.ProjectileSO = 12;
        this.damageO = 50;
        this.OfireRateO = 22;
        this.critChanceO = 10;
        this.critDamageO = 2;
        this.lifeStealChanceO = 0;
        this.lifeStealAmountO = .01;
        this.knockbackO = 0;
        this.sound = sounds.ak;
        this.weaponsConstructor();
    }
}
class Grimore extends Weapon
{   constructor(x, y, width, height)
    {   super(x, y, width, height, "imgs/grimore.png")
        this.projectileRO = 5;
        this.ProjectileSO = 12;
        this.damageO = 50;
        this.OfireRateO = 22;
        this.critChanceO = 10;
        this.critDamageO = 2;
        this.lifeStealChanceO = 0;
        this.lifeStealAmountO = .01;
        this.knockbackO = 0;
        this.sound = sounds.fireball;
        this.weaponsConstructor();
        this.setFireChance = 25;
    }
}