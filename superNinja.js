class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log("Name: " + this.name + ", Strength: " + this.strength + ", Speed: " + this.speed + ", Health: " + this.health);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("This is a serious message to anyone watching my... update right now.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();