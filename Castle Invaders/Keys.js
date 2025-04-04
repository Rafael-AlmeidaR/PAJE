class Keys
{   constructor()
    {   this.keyUp = 87;
        this.keyDown = 83;
        this.keyLeft = 65;
        this.keyRight = 68;
        this.keyConfirm = 13;
        this.keyFire = "";
        this.controlsNames = ["CIMA", "BAIXO", "ESQUERDA", "DIREITA", "ATIRAR"]
        this.keysLetters = [String.fromCharCode(this.keyUp), String.fromCharCode(this.keyDown), String.fromCharCode(this.keyLeft), String.fromCharCode(this.keyRight), "mouse"]
        this.nKeys = [];
        this.switched = 0;
        this.keysO = [87, 83, 65, 68, 13]
    }
}