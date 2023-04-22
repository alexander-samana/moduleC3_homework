"use strict"
class ElectAppliance {
    constructor(name) {
        this.name = name;
        this.included = false;
    }
    turnOn() {
        console.log(`Включение устройства ${this.name} в розетку  `);
        this.included = true;
    }
    switchOff() {
        console.log(`Выключение устройства ${this.name} из розетки  `);
        this.included = false;
    }
}

class Computers extends ElectAppliance {
    constructor(name, view) {
        super(name);
        this.operatingSystem = 'Windows';
        this.view = view;
        this.included = false;

    }
}


class Lamps extends ElectAppliance {
    constructor(name, lightСolor) {
        super(name);
        this.plinth = 'e27';
        this.lightСolor = lightСolor;
        this.included = true;
    }
}


const macbook = new Computers('macbook','laptop')
macbook.turnOn()
console.log(macbook)
const iMac = new Computers('iMac','monoblock')
console.log(iMac)
const desktopLamp = new Lamps('desktopLamp','white')
console.log(desktopLamp)
const kitchenLamp = new Lamps('kitchenLamp','warm')
kitchenLamp.switchOff()
console.log(kitchenLamp)