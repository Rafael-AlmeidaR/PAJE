class Hud
{   constructor()
    {   this.coinsImg = new Image;
        this.coinsImg.src = "imgs/moeda.png"
    }
    draw()
    {   if(waveController != undefined && waveController.drawHud)
        {   context.drawImage(this.coinsImg, 16, 20, 64, 64)
            txt(84, 52, gameStatus.gameCoins, 30, "yellow")

            txt(canvas.width/2, 52, "WAVE " + gameStatus.wave + ": " + waveController.timer, 60, "black")
        } 
        else
        {   context.drawImage(this.coinsImg, 16, 20, 64, 64)
            txt(84, 52, menuStatus.coins, 30, "yellow")
        }
    }
}