class Sounds {
    constructor() {
        this.click = new Audio("sounds/click.ogg");
        this.volume = .5;
        this.soundChange();
    }
    soundChange()
    {   this.click.volume = this.volume
        console.log(this.volume)
    }
}