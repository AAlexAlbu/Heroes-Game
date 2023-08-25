let hero1Winner = document.getElementById("show-winner-hero1");
let hero2Winner = document.getElementById("show-winner-hero2");

class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
        this.canFly = false;
        this.shield = false;

    }

    attacked(damage) {
        if(this.canFly) { //this.canFly === true echivalent cu this.canFly
            let chance = Math.random(); //Math.random() returneaza un numar random intre 0 si 1; este un obiect scris in JS
            //chance este variabila ce tine rezultatul functiei math.random; valoarea variabilei chance difera de la o apelare(a metodei attacked) la alta (doar daca conditia this.canFly este true)
            if(chance > 0.5) {
                console.log(this.name + "flew away.");
                damage = 0;
            }
        }

        if(this.shield) {
            damage *= 0.8; //damage ul scade cu 0.2
            console.log(this.name + " defends with a shield!");
        }

        this.hp -= damage;
        console.log(this.name + " has been attacked. HP reduced by " + damage + ". HP remaining: " + this.hp + ".");
    }
}

class Dwarf extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.shield = true;
    }

    attack(otherHero) { //eroul (dwarf) ataca un alt erou (otherHero) si metoda attack() are ca si parametru otherHero(otherHero este un obiect => vom avea 3 obiecte eroi instantiate din clasele de eroi si ii putem folosi ca si valori ale parametrilor)
        let damage = 10;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage); //otherHero (obiectul eroului cae a fost atacat) apeleaza metoda din clasa Parinte (clasa Hero) si ca si parametru se transmite valoarea variabilei damage.
    }
}

class Sprite extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.canFly = true;
    }

    attack(otherHero) { //eroul (sprite) ataca un alt erou (otherHero) si metoda attack() are ca si parametru otherHero(otherHero este un obiect => vom avea 3 obiecte eroi instantiate din clasele de eroi si ii putem folosi ca si valori ale parametrilor)
        let damage = 15;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage); //otherHero (obiectul eroului cae a fost atacat) apeleaza metoda din clasa Parinte (clasa Hero) si ca si parametru se transmite valoarea variabilei damage.
    }
}

class Dragon extends Hero {
    constructor(name, hp) {
        super(name, hp);
        this.shield = true;
        this.canFly = true;
    }

    attack(otherHero) { //eroul (dragon) ataca un alt erou (otherHero) si metoda attack() are ca si parametru otherHero(otherHero este un obiect => vom avea 3 obiecte eroi instantiate din clasele de eroi si ii putem folosi ca si valori ale parametrilor)
        let damage = 5;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage); //otherHero (obiectul eroului cae a fost atacat) apeleaza metoda din clasa Parinte (clasa Hero) si ca si parametru se transmite valoarea variabilei damage.
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0;
    }

    performAttack() {
        if(this.turn === 0) {
            this.hero1.attack(this.hero2);
        } else {
            this.hero2.attack(this.hero1);
        }
    }

    changeTurn() {
        this.turn = 1 - this.turn; //tura poate sa fie doar 0 sau 1
    }

    findWinner() {
        if(this.hero1.hp > 0) {
            let winner = this.hero1.name + " won with " + this.hero1.hp + " HP left.";
            hero1Winner.classList.add("d-flex");
            hero2Winner.classList.add("d-none");
            console.log(winner);
            return winner;
        } else if(this.hero2.hp > 0) {
            let winner = this.hero2.name + " won with " + this.hero2.hp + " HP left.";
            hero2Winner.classList.add("d-flex");
            hero1Winner.classList.add("d-none");
            console.log(winner);
            return winner;
        } else {
            let winner = "No heroes left alive.";
            console.log(winner);
            return winner;
        }
    }

    go() {
        do {
            this.performAttack();
            this.changeTurn();
        } while (this.hero1.hp > 0 && this.hero2.hp > 0);
        this.findWinner();
    }
}


var dwarf = new Dwarf("Khurbada Oakenguard Dwarf", 50);
var sprite = new Sprite("Prinna Bumblelace Sprite", 40);
var dragon = new Dragon("Aphat, The Pun Dragon", 60);

let epicFight = new Fight(dwarf, dragon);
epicFight.go();



