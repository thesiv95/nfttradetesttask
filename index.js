const CupClass = require('./class.js');

const waterAmount = Math.floor(Math.random() * 10000);
const clayAmount = Math.floor(Math.random() * 9800);

const cupInstance = new CupClass(waterAmount, clayAmount);

console.log(cupInstance);

// Let's build a cup from clay!

cupInstance.dateOfStart();
cupInstance.setEnergyLevel('sleep');
cupInstance.prepare();
cupInstance.build(2);
cupInstance.status();