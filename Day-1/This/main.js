// // ex-1
const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }
  
  person.feed() //should alert "I'm no longer hungry"

  // ex-2
  const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + this.liters + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(1);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//ex-3
const pumpFuel = function (plane) {
    plane.fuel += 1;
  };
  
  const airplane = {
    fuel: 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly());

//ex-4
const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1
    },
    stealCoins: function(amount) {
        this.coinCount -= amount
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//ex-5
const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    alert(person.name + " said: " + result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);

//ex-6
const coffeeShop = {
    beans: 40,

    money: 100,

    drinkRequirements: {
        latte: {beanRequirement: 10, price: 25},
        americano: {beanRequirement: 5, price: 12},
        doubleShot: {beanRequirement: 15, price: 35},
        frenchPress: {beanRequirement: 12, price: 30}
    },
  
    makeDrink: function (drinkType) {
        if(!this.drinkRequirements[drinkType]){
            alert(`Sorry, we don't make ${drinkType}`)
        } else if (this.beans - this.drinkRequirements[drinkType].beanRequirement < 0){
           alert("Sorry, we're all out of beans!")
        }else{
            this.beans -= this.drinkRequirements[drinkType].beanRequirement
        }
    },
    buyDrink: function(drinkType){
        this.makeDrink(drinkType)
        if(this.drinkRequirements[drinkType]){
            this.money += this.drinkRequirements[drinkType].price
        } 
    },

    buyBeans: function(beansToBuy) {
        this.beans += beansToBuy
        this.money -= beansToBuy * 2
    }
  }
  
  coffeeShop.buyDrink("latte"); 
  coffeeShop.buyDrink("americano");
  coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.buyDrink("doubleShot");
  coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"


