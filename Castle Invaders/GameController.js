class GameStatus 
{   constructor()
    {   MenuOptions = -2;
        this.gameCoins = 0;
        this.wave = 0;
        this.waveBooster = 1;
        setTimeout(this.initilizeGame, 1)
        this.upgradeQ = 3;
        this.upgrades = [ 
            {name: "Attack Speed",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: +.1, upT: "+10%"},
            {name: "Damage",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: .25, upT: "+25%"},
            {name: "Bullet Scale",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: .1, upT: "+10%"},
            {name: "Bullet Speed",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: 2, upT: "+1"},
            {name: "Castle Life",price: 0, priceR: 0,effect: 0, maxAmount: 3, actualAmount: 0, up: 100, upT: "+100"},
            {name: "Coins Drop",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: 5, upT: "+5%"},
            {name: "Castle Defense",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: .03, upT: "+3%"},
            {name: "Crit. Chance",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: 10, upT: "+10%"},
            {name: "Crit. Damage",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: .25, upT: "+25%"},
            {name: "Invencible Time",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: 2, upT: "+2 Frames"},
            {name: "LifeSteal Chance",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: 5, upT: "+5%"},
            {name: "LifeSteal Amount",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: .03, upT: "+3%"},
            {name: "Thorns",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: 4, upT: "+4%"},
            {name: "knockback",price: 0, priceR: 0, effect: 0, maxAmount: 3, actualAmount: 0, up: 3, upT: "+3"},
            {name: "full recovery", price: 0, priceR: 0,effect: 0, maxAmount: 99999999, actualAmount: 0, up: 1, upT: "Full Hp"},
            {name: "Upgrades Amount", price: 0, priceR: 0,effect: 0, maxAmount: 10, actualAmount: 0, up: 1, upT: "+1 upgrade"}
        ];
        /*  upgrades nas waves, e upgrades do jogo também.
            attack speed
            weapon damage
            bullet radius
            bullet speed
            castle life
            full life
            coins drop chance
            castle defense
            weapon crit chance
            weapon crit damage
            aumentar iframes
            vampirismo
            catapultas
            espinhos
            knockback
        */  
    }
    initilizeGame()
    {   finalT = -1;
        waveController = new WaveController();
        player =  new Character(canvas.width/2-48, canvas.height-128, 96, 96, "imgs/perso-01.png");
        switch(weaponEquipped)
        {   case 0: 
                weapon = new Slingshot(canvas.width/2-48, canvas.height-176, 96, 48);
            break;
            case 1:
                weapon = new Sword(canvas.width/2-48, canvas.height-176, 96, 48);
            break;
            case 2: 
                weapon = new Ak47(canvas.width/2-48, canvas.height-176, 96, 48);
            break;
            case 3:
                weapon = new Grimore(canvas.width/2-48, canvas.height-176, 96, 48);
            break;
        }
        
        castle = new Castle(canvas.width/2-144, canvas.height-192, 288, 192, "imgs/castelo.png");
        projectiles = new Projectiles();
        hud = new Hud();
        enemys = new Enemys();
    }
    atualizeStatus()
    {   weapon.weaponsConstructor();
        castle.castleContructor();
        if(this.upgrades[14].effect > 0)
        {   castle.hp = castle.Maxhp;
            this.upgrades[14].effect--;
        }
        this.upgradeQ = 3+this.upgrades[15].effect;
    }
}
class MenuStatus
{   constructor()
    {   this.coins = 0;
        this.upgrades = [ 
            {name: "Attack Speed", price: 25, priceR: 25, effect: 1, maxAmount: 3, actualAmount: 0, up: +.1, upT: "+10%"},
            {name: "Damage", price: 50, priceR: 50, effect: 1, maxAmount: 3, actualAmount: 0, up: .25, upT: "+25%"},
            {name: "Bullet Scale", price: 25, priceR: 25, effect: 1, maxAmount: 3, actualAmount: 0, up: .1, upT: "+10%"},
            {name: "Bullet Speed", price: 25, priceR: 25, effect: 0, maxAmount: 3, actualAmount: 0, up: 2, upT: "+1"},
            {name: "Castle Life", price: 25, priceR: 25,effect: 0, maxAmount: 3, actualAmount: 0, up: 100, upT: "+100"},
            {name: "Coins Drop", price: 100, priceR: 100, effect: 0, maxAmount: 3, actualAmount: 0, up: 5, upT: "+5%"},
            {name: "Castle Defense", price: 50, priceR: 50, effect: 0, maxAmount: 3, actualAmount: 0, up: .03, upT: "+3%"},
            {name: "Crit. Chance", price: 100, priceR: 75, effect: 0, maxAmount: 3, actualAmount: 0, up: 10, upT: "+10%"},
            {name: "Crit. Damage", price: 75, priceR: 50, effect: 0, maxAmount: 3, actualAmount: 0, up: .25, upT: "+25%"},
            {name: "Invencible Time", price: 100, priceR: 100, effect: 0, maxAmount: 3, actualAmount: 0, up: 2, upT: "+2 Frames"},
            {name: "LifeSteal Chance", price: 50, priceR: 50, effect: 0, maxAmount: 3, actualAmount: 0, up: 5, upT: "+5%"},
            {name: "LifeSteal Amount", price: 50, priceR: 50, effect: 0, maxAmount: 3, actualAmount: 0, up: .03, upT: "+3%"},
            {name: "Thorns", price: 100, priceR: 100, effect: 0, maxAmount: 3, actualAmount: 0, up: 4, upT: "+4%"},
            {name: "knockback", price: 200, priceR: 200, effect: 0, maxAmount: 3, actualAmount: 0, up: 3, upT: "+3"},
        ]
        this.inventory = [
            {equipped: 1, unlocked: 1,img: "imgs/slingshot.png"},
            {equipped: 0, unlocked: 0, img: "imgs/sword.png"},
            {equipped: 0, unlocked: 0, img: "imgs/gun.png"},
            {equipped: 0, unlocked: 0, shopI: 0, img: "imgs/grimore.png"},
        ]
        this.shopItens = [
            {price: 1000, buyed: 0, img: "imgs/grimore.png"}
        ]
    }
}
class WaveController
{   constructor()
    {   this.timer2 = 0;
        this.timer = (30*difficult)*(1 + ((gameStatus.wave+1)%10==0));
        // this.timer = 1;
        this.freezed = false;
        this.drawHud = 1;
        this.spawnTime = 0;
        this.spawnChance = 45-(15-(difficult/.5)*2.5);
        this.additioned = [];
        this.totalBoss = Math.trunc((gameStatus.wave+1)/10);
        this.totalBossA = this.totalBoss;
        this.infinity = false;
    }
    update()
    {   this.timer2 += this.timer2 < FPS;
        if(this.spawnTime <= 0)
        {   this.spawnTime = 20/1+(Math.trunc(gameStatus.wave/2)*.1);
            let stop = false;
            if(Math.random()*50<=this.spawnChance)
            {   this.spawn(0);
                stop = Math.random() >= .9;
                console.log(stop)
            }
            else
            {   if(Math.random()*50<=this.spawnChance && gameStatus.wave >= 3 && !stop)
                {   this.spawn(1);
                    stop = Math.random() >= .9;
                    console.log(stop)
                }
                else
                {   if(Math.random()*50<=this.spawnChance && gameStatus.wave >= 6 && !stop)
                    {   this.spawn(2);
                        console.log(stop)
                    }
                }
            }
            if((gameStatus.wave%10) == 0 && this.totalBoss > 0)
            {   this.spawn(3);
                this.totalBoss--;
            }
        }
        if(gameStatus.wave == 10 && (this.totalBossA == 0 || this.timer == 0) && this.infinity == false)
        {   finalT = 0;
            MenuOptions = -1;        
            buttons = [new EndGameButton(canvas.width*.3, canvas.height*.75, canvas.width*.4, canvas.height*.1, "VOLTAR PARA O MENU"), new ContinueButton(canvas.width*.3, canvas.height*.6, canvas.width*.4, canvas.height*.1, "MODO INFINITO")]
            clearInterval(timer)
            timer = setInterval(finalScreen, 1000/FPS);
        }
        if(this.timer2 == FPS)
        {   this.timer -= this.timer2==FPS;
            this.timer2 = 0;
        }
        if(this.timer == 0)
        {   this.waveChoose();
            this.freezed = true;
            controlsS = 2;
            projectiles.Allprojectiles = [];
            enemys.list = [];
            enemys.coins = [];
        }
        this.spawnTime--;
    }
    waveChoose()
    {   for(let i = 0; i < gameStatus.upgradeQ; i++)
        {   let multiX = (i%5) != (gameStatus.upgradeQ%5)/2 ? (i%5)-((gameStatus.upgradeQ%5)/2) : 0;
            let x = canvas.width / 2 + (canvas.width * (0.125 * multiX)) + ((gameStatus.upgradeQ <= 5)*canvas.width*.0625-(canvas.width*.25*(gameStatus.upgradeQ >= 11)));
            let y = canvas.height * 0.2 + canvas.height * 0.25 * Math.trunc(i / 5);
        
            let upgradeBtn = Math.trunc(Math.random()*gameStatus.upgrades.length)
            while(this.additioned.includes(upgradeBtn))
            {   upgradeBtn = Math.trunc(Math.random()*gameStatus.upgrades.length)
            }
            this.additioned.push(upgradeBtn);
            buttons.push(new UpgradeButton(x-canvas.width*.05,y,canvas.width*.1,canvas.width*.1,  this.additioned[i]))
        }
        MenuOptions = 0;
        weapon.fireRate = 3;
    }
    spawn(enemyT)
    {   let x = Math.trunc(Math.random()*innerWidth);
        let y = -Math.trunc(Math.random()*192)-96;
        switch(enemyT)
        {   case 0:
                enemys.list.push(new Enemy1(x, y))
            break;
            case 1:
                enemys.list.push(new Enemy2(x, y))
            break;
            case 2:
                enemys.list.push(new Enemy3(x, y))
            break;
            case 3:
                enemys.list.push(new Enemy4(x, y))
            break;
        }
    }
}