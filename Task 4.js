"use strict"
function ElectAppliance(name) {
    this.name = name;
    this.included = false;
}
ElectAppliance.prototype.turnOn = function() {
    console.log(`Включение устройства ${this.name} в розетку  `);
    this.included = true;
}
ElectAppliance.prototype.switchOff = function() {
    console.log(`Выключение устройства ${this.name} из розетки  `);
    this.included = false;
}

function Computers(name, view) {
    this.operatingSystem = 'Windows';
    this.view = view;
    this.included = false;
    this.name = name;

}
function Lamps(name, lightСolor) {
    this.plinth = 'e27';
    this.lightСolor = lightСolor;
    this.included = true;
    this.name = name;
}

Computers.prototype = new ElectAppliance()
Lamps.prototype = new ElectAppliance()

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