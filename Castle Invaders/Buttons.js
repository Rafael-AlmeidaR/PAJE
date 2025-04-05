class Button extends Entity
{   constructor(x, y, width, height, text)
    {   super(x, y, width, height)
        this.selected = 0;
        this.defaultText = text;
        this.text = this.defaultText
        this.opacity = 1;
        this.textT = 25;
    }
    draw()
    {   if(this.opacity == 1)
        {   context.fillStyle = this.selected == 1 ? `rgba(212, 204, 204, ${this.opacityA != undefined ? this.opacityA : 0.9})` : `rgba(255, 255, 255, ${this.opacityA != undefined ? this.opacityA : 1})`;
            context.fillRect(this.x, this.y, this.width, this.height)
            context.fillStyle = this.selected == 1 ? `rgba(222, 87, 114, ${this.opacityA != undefined ? this.opacityA : 0.5})` : `rgba(222, 87, 114, ${this.opacityA != undefined ? this.opacityA : 1})`;
            context.fillRect(this.x+1, this.y+1, this.width-2, this.height-2)
            let color = this.selected == 1 ? `rgba(212, 204, 204, ${this.opacityA != undefined ? this.opacityA : 0.9})` : `rgba(255, 255, 255, ${this.opacityA != undefined ? this.opacityA : 1})`;
            txt(this.x + this.width/2, this.y + this.height/2, this.text, this.textT,color);
        }
    }
    clicked()
    {   switching = true
    }
}
class SwitchSButton extends Button
{   constructor(x, y, width, height, text, next)
    {   super(x,y,width,height,text)
        this.next = next;
    }
    clicked()
    {   clearInterval(timer)
        timer = setInterval(this.next, 1000/FPS);
        keysC = 0;
        buttons = [];
        switch(this.next)
        {   case menu:
                buttons = [new SwitchSButton(canvas.width*.3, canvas.height*.3, canvas.width*.4, canvas.height*.1, "JOGAR", game), new SwitchSButton(canvas.width*.3, canvas.height*.45, canvas.width*.4, canvas.height*.1, "EQUIPAMENTOS", equipaments), new SwitchSButton(canvas.width*.3, canvas.height*.6, canvas.width*.4, canvas.height*.1, "CONFIGURAÇÕES", configurations), new ButtonDifficult(canvas.width*.3, canvas.height*.75, canvas.width*.4, canvas.height*.1, `DIFICULDADE: ${difficultT}`)]
            break;
            case configurations:
                buttons = [new SoundButton(canvas.width*.3, canvas.height*.3, canvas.width*.4, canvas.height*.1, "SOM"), new SwitchSButton(canvas.width*.3, canvas.height*.45, canvas.width*.4, canvas.height*.1, "CONTROLES", controls), new SwitchSButton(canvas.width*.3, canvas.height*.6, canvas.width*.4, canvas.height*.1, "VOLTAR", menu)]
                // buttons = [new Button(canvas.width*.3, canvas.height*.3, canvas.width*.4, canvas.height*.1, "SOM"), new SwitchSButton(canvas.width*.3, canvas.height*.45, canvas.width*.4, canvas.height*.1, "CONTROLES", controls), new MultiplayerButton(canvas.width*.3, canvas.height*.6, canvas.width*.4, canvas.height*.1, totalPlayersT), new SwitchSButton(canvas.width*.3, canvas.height*.75, canvas.width*.4, canvas.height*.1, "VOLTAR", menu)]
                break;
            case controls:
                buttons = [new Button(canvas.width*.3, canvas.height*.3, canvas.width*.4, canvas.height*.1, "ALTERAR CONTROLES"), new ButtonResetKeys(canvas.width*.3, canvas.height*.45, canvas.width*.4, canvas.height*.1, "RESETAR CONTROLE"), new SwitchSButton(canvas.width*.3, canvas.height*.6, canvas.width*.4, canvas.height*.1, "VOLTAR", configurations)]
            break;
            case equipaments:
                controlsS = false;
                buttons = [new SwitchSButton(canvas.width*.3, canvas.height*.3, canvas.width*.4, canvas.height*.1, "INVENTÁRIO", inventory), new SwitchSButton(canvas.width*.3, canvas.height*.45, canvas.width*.4, canvas.height*.1, "LOJA", shop), new SwitchSButton(canvas.width*.3, canvas.height*.6, canvas.width*.4, canvas.height*.1, "UPGRADES", upgradesShop), new SwitchSButton(canvas.width*.3, canvas.height*.75, canvas.width*.4, canvas.height*.1, "VOLTAR", menu)]
            break;
            case game:
                gameStatus = new GameStatus();
            break;
            case upgradesShop:
                controlsS = true;
                for(let i = 0; (i < menuStatus.upgrades.length); i++)
                {   buttons.push(new UpgradeSButton(canvas.width/2-canvas.width*.45+(canvas.width*.125*(i%7)), canvas.height*.25*(Math.trunc(i/7)+1), canvas.width*.1, canvas.width*.1, i))
                }
                buttons.push(new SwitchSButton(canvas.width*.3, canvas.height*.85, canvas.width*.4, canvas.height*.1, "VOLTAR", equipaments))
            break;
            case inventory:
                for(let i = 0; (i < menuStatus.inventory.length); i++)
                {   let multiX = (i%5) != (menuStatus.inventory.length%5)/2 ? (i%5)-((menuStatus.inventory.length%5)/2) : 0;
                    let x = canvas.width / 2 + (canvas.width * (0.125 * multiX)) + ((menuStatus.inventory.length <= 5)*canvas.width*.0625-(canvas.width*.25*(menuStatus.inventory.length >= 11)));
                    let y = canvas.height * 0.25 + canvas.height * 0.25 * Math.trunc(i / 5);
                    buttons.push(new InventoryButton(x-canvas.width*.05, y , canvas.width*.1,canvas.width*.125, i))
                }
                buttons.push(new SwitchSButton(canvas.width*.3, canvas.height*.85, canvas.width*.4, canvas.height*.1, "VOLTAR", equipaments))
            break;
            case shop:
                for(let i = 0; (i < menuStatus.shopItens.length); i++)
                {   let multiX = (i%5) != (menuStatus.shopItens.length%5)/2 ? (i%5)-((menuStatus.shopItens.length%5)/2) : 0;
                    let x = canvas.width / 2 + (canvas.width * (0.125 * multiX)) + ((menuStatus.shopItens.length <= 5)*canvas.width*.0625-(canvas.width*.25*(menuStatus.shopItens.length >= 11)));
                    let y = canvas.height * 0.25 + canvas.height * 0.25 * Math.trunc(i / 5);
                    buttons.push(new shopButton(x-canvas.width*.05, y , canvas.width*.1,canvas.width*.125, i))
                }
                buttons.push(new SwitchSButton(canvas.width*.3, canvas.height*.85, canvas.width*.4, canvas.height*.1, "VOLTAR", equipaments))
            break;
        }
    }
}
class ButtonResetKeys extends Button
{   constructor(x, y, width, height, text)
    {   super(x,y,width,height,text)
    }
    clicked()
    {   for(let i = 0; (i < keys.keysO.length); i++)
        {   switch(i)
            {   case 0:
                    keys.keyUp = keys.keysO[i];
                break;
                case 1:
                    keys.keyDown = keys.keysO[i];
                break;
                case 2:
                    keys.keyLeft = keys.keysO[i];
                break;
                case 3:
                    keys.keyRight = keys.keysO[i];
                break;
                case 4:
                    keys.keyFire = keys.keysO[i];
                break;
            }
        }
        keys.keysLetters = [String.fromCharCode(keys.keyUp), String.fromCharCode(keys.keyDown), String.fromCharCode(keys.keyLeft), String.fromCharCode(keys.keyRight), String.fromCharCode(keys.keyFire)]
    }   
}
class ButtonDifficult extends Button
{   constructor(x, y, width, height, text)
    {   super(x,y,width,height,text)
    }
    clicked()
    {   difficultSwitch();
        this.text = "DIFICULDADE: "+difficultT;
    }
}
class UpgradeSButton extends Button
{   constructor(x, y, width, height, upgradeT)
    {   super(x, y, width, height)
        this.upgradeT = menuStatus.upgrades[upgradeT]
        this.text = this.upgradeT.name;
        this.textT = 20;
        this.coinImage = new Image;
        this.coinImage.src = "imgs/moeda.png";
    }
    draw()
    {   super.draw()
        if(this.upgradeT.price != "Maximizado")
        {   context.drawImage(this.coinImage, this.x + this.width/2-24, this.y + this.height/2+12, 32, 32)
        }
        let sumX = (this.upgradeT.price != "Maximizado")*16
        txt(this.x + this.width/2+sumX, this.y + this.height/2+30, this.upgradeT.price, this.textT, "rgba(234, 222, 40, 1)")
        let color = this.selected == 1 ? `rgba(212, 204, 204, ${this.opacityA != undefined ? this.opacityA : 0.9})` : `rgba(255, 255, 255, ${this.opacityA != undefined ? this.opacityA : 1})`;
        txt(this.x + this.width/2, this.y + this.height/2-24, this.upgradeT.upT, this.textT, color)
        
    }
    clicked()
    {   if(this.upgradeT.price != "Maximizado")
        {   if(menuStatus.coins >= this.upgradeT.price || menuStatus.coins == "∞")
            {   this.upgradeT.effect += this.upgradeT.up;
                this.upgradeT.actualAmount ++;
                if(menuStatus.coins != "∞")
                {    menuStatus.coins -= this.upgradeT.price;
                }
                this.upgradeT.price += this.upgradeT.priceR;
                if(this.upgradeT.maxAmount == this.upgradeT.actualAmount)
                {   this.upgradeT.price = "Maximizado";
                }
            }
            else
            {   alert("moedas insuficientes")
            }
        }
    }
}
class UpgradeButton extends Button
{   constructor(x, y, width, height, whichUp)
    {   super(x, y, width, height)
        this.upgradeT = gameStatus.upgrades[whichUp]
        this.text = this.upgradeT.name;
        this.textT = 20;
    }
    clicked()
    {   this.upgradeT.effect+=this.upgradeT.up;
        this.upgradeT.actualAmount ++;
        buttons = [];
        waveController = new WaveController();
        gameStatus.wave++;
        MenuOptions = -2;
        gameStatus.waveBooster = gameStatus.waveBooster + (0.05*difficult/0.5)*(gameStatus.wave%(difficult <= 1 ? 2 : 1)==0);        
        enemys = new Enemys()
        gameStatus.atualizeStatus()
    }
    draw()
    {   super.draw()
        let color = this.selected == 1 ? `rgba(212, 204, 204, ${this.opacityA != undefined ? this.opacityA : 0.9})` : `rgba(255, 255, 255, ${this.opacityA != undefined ? this.opacityA : 1})`;
        txt(this.x + this.width/2, this.y + this.height/2-24, this.upgradeT.upT, this.textT, color)
    }
}
class InventoryButton extends Button
{   constructor(x, y, width, height, i)
    {   super(x, y, width, height)
        this.inventoryI = menuStatus.inventory[i];
        this.img = new Image;
        this.img.src = this.inventoryI.img;
        this.i = i;
    }
    draw()
    {   context.fillStyle = this.selected == 1 ? `rgba(212, 204, 204, ${this.opacityA != undefined ? this.opacityA : 0.9})` : `rgba(255, 255, 255, ${this.opacityA != undefined ? this.opacityA : 1})`;
        context.fillRect(this.x, this.y, this.width, this.height)
        context.fillStyle = this.selected == 1 ? `rgba(222, 87, 114, ${this.opacityA != undefined ? this.opacityA : 0.5})` : `rgba(222, 87, 114, ${this.opacityA != undefined ? this.opacityA : 1})`;
        context.fillRect(this.x+1, this.y+1, this.width-2, this.height-2)
        let buttonText;
        if(this.inventoryI.unlocked == 0)
        {   buttonText = "locked"
            context.fillStyle = "black";
        }
        else
        {   if(this.inventoryI.equipped)
            {   buttonText = "equipped";
                context.fillStyle = "green";   
            }
            else
            {   buttonText = "equip";
                context.fillStyle = "red"
            }
        }
        context.drawImage(this.img, this.x+this.height/8, this.y+1, this.width-this.height/4-2, this.height-this.height/4-2);
        context.fillRect(this.x+1, this.y+this.height-this.height/4, this.width-2, this.height/4);
        txt(this.x + this.width/2, this.y + this.height-this.height/8, buttonText, 20, "white");
    }
    clicked()
    {   if(this.inventoryI.unlocked == 1 && this.inventoryI.equipped == 0)
        {   for(let i = 0; (i < menuStatus.inventory.length); i++)
            {   if(menuStatus.inventory[i].unlocked == 1)
                {   menuStatus.inventory[i].equipped = i==this.i;
                }
            }
            weaponEquipped = this.i;
        }
    }
}
class shopButton extends Button
{   constructor(x, y, width, height, i)
    {   super(x, y, width, height)
        this.shopI = menuStatus.shopItens[i];
        this.img = new Image;
        this.img.src = this.shopI.img;
        this.coinImg = new Image;
        this.i = 0;
        this.coinImg.src = "imgs/moeda.png";
    }
    draw()
    {   context.fillStyle = this.selected == 1 ? `rgba(212, 204, 204, ${this.opacityA != undefined ? this.opacityA : 0.9})` : `rgba(255, 255, 255, ${this.opacityA != undefined ? this.opacityA : 1})`;
        context.fillRect(this.x, this.y, this.width, this.height)
        context.fillStyle = this.selected == 1 ? `rgba(222, 87, 114, ${this.opacityA != undefined ? this.opacityA : 0.5})` : `rgba(222, 87, 114, ${this.opacityA != undefined ? this.opacityA : 1})`;
        context.fillRect(this.x+1, this.y+1, this.width-2, this.height-2)
        context.fillStyle = "black"
        context.fillRect(this.x+1, this.y+this.height-this.height/4, this.width-2, this.height/4);
        context.drawImage(this.img, this.x+this.height/8, this.y+1, this.width-this.height/4-2, this.height-this.height/4-2);
        let buttonText;
        if(this.shopI.buyed == 0)
        {   buttonText = this.shopI.price
            context.drawImage(this.coinImg, this.x+this.width/2-42,this.y + this.height-this.height/8-18, 32, 32);
        }
        else
        {   buttonText = "buyed";
        }
        txt(this.x + this.width/2+(10*(buttonText!="buyed")), this.y + this.height-this.height/8, buttonText, 20, "white");
    }
    clicked()
    {   if(menuStatus.coins >= this.shopI.price)
        {   this.shopI.buyed = 1;   
            for(let i = 0; (i < menuStatus.inventory.length); i++)
            {   if(this.i == menuStatus.inventory[i].shopI)
                {   menuStatus.inventory[i].unlocked = 1;
                }
            }
            menuStatus.coins -= this.shopI.price;
        }
    }
}
class ContinueButton extends Button
{   constructor(x, y, width, height, text)
    {   super(x,y,width,height,text)
    }
    clicked()
    {   waveController.timer = 0;
        waveController.timer2 = 0;
        clearInterval(timer);
        waveController.infinity = true;
        buttons = [];
        timer = setInterval(game, 1000/FPS)
    }

}
class EndGameButton extends SwitchSButton
{   constructor(x, y, width, height, text)
    {   super(x, y, width, height, text, menu)
    }
    clicked()
    {   super.clicked();
        waveController = undefined;
        menuStatus.coins += gameStatus.gameCoins;
    }
}
class SoundButton extends Button
{   constructor(x, y, width, height, text)
    {   super(x, y, width, height, text)
    }
    clicked(clickT)
    {   switch(clickT)
        {   case 0:
                sounds.volume = (!Math.round(sounds.volume));
            break;
            default:
                if(sounds.volume > 0 && clickT == -1)    
                {   sounds.volume = Math.round((sounds.volume*10)+(clickT))/10;
                }
                else
                {   if(sounds.volume < 1 && clickT == 1)
                    {   sounds.volume = Math.round((sounds.volume*10)+(clickT))/10;
                    }
                }
        }
        sounds.soundChange()
    }
    draw()
    {   super.draw();
        let lar = this.width/4*sounds.volume;
        context.fillRect(this.x + this.width/2+this.width/8, this.y+this.height/2-this.height/8, lar, this.height/4);
        context.beginPath()
        context.arc(this.x + this.width/2+this.width/8+lar, this.y+this.height/2-this.height/8+7.5, 15, 0, Math.PI*2, true);
        context.closePath()
        context.fill();
    }
}