class Sounds {
    constructor() {
        this.ak = new Audio("sounds/ak.mp3");
        this.click = new Audio("sounds/click.ogg");
        this.death = new Audio("sounds/death.wav");
        this.hit = new Audio("sounds/hit.wav");
        this.slash = new Audio("sounds/slash.wav");
        this.slingshot = new Audio("sounds/slingshot.mp3");
        this.fireball = new Audio("sounds/fireball.wav");
        this.enemyHit = new Audio("sounds/enemyHit.wav")
        this.volume = .5;

        this.soundChange();
    }
    soundChange()
    {   this.ak.volume = this.volume;
        this.click.volume = this.volume;
        this.death.volume = this.volume;
        this.hit.volume = this.volume;
        this.slash.volume = this.volume;
        this.slingshot.volume = this.volume;
        this.fireball.volume = this.volume;
        this.enemyHit.volume = this.volume;
    }
}