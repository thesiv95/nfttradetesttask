

class CupClass {

    constructor(water, clay) {
        this.water = water;
        this.clay = clay;
    }

    time = 100000;
    energy = 0;

    setEnergyLevel(method) {
        switch (method) {
            case 'sleep':
                this.energy += Math.floor(Math.random() * 1000000);
                break;
            case 'eat':
                this.energy += Math.floor(Math.random() * 800000);
                break;
            default:
                this.energy += Math.floor(Math.random() * 500000);
        }
        console.log(`You have increased your energy by ${method}ing: ${this.energy}`)
        return this.energy;
    }


    dateOfStart() {
        return console.log(new Date().toLocaleDateString());
    }

    prepare() {
        if (!this.water || !this.clay) {
            throw new Error('Not enough ingredients');
        }

        if (this.energy <= 100) {
            throw new Error('Not enough energy. Go to sleep!');
        }

        this.water -= 500;
        this.clay -= 500;

        this.energy -= 5000;
        this.time -= 1000;
    }


    build(speed) {
        const machineSpeed = [0, 1, 2];
        if (!machineSpeed.includes(speed)) {
            throw new Error('Your machine is broken');
        }

        if (speed === 0) {
            throw new Error('Your machine is off, turn it on!');
        }

        this.water = speed === 1 ? this.water - 200 : this.water - 400;
        this.clay = speed === 1 ? this.water - 500 : this.water - 600;

        this.energy -= 7000;

        this.time = speed === 2 ? this.time - 1000 : this.time - 3000;
    }

    status() {
        console.log('Water', this.water);
        console.log('Clay', this.clay);
        console.log('Your energy', this.energy);
        console.log('Time left', this.time);
    }



}


module.exports = CupClass;