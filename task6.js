
// a “person” class to hold all the details
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  }
  
  const person1 = new Person("Mahaboob Basha", 26, "male");
  const person2 = new Person("preethi", 26, "female");
  
  person1.displayDetails();
  person2.displayDetails();
  
//   class to calculate the uber price
class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier || 1; // Default surge multiplier is 1 (no surge).
    }
  
    calculatePrice(distance, time) {

      const totalFare = this.baseFare + (this.costPerKilometer * distance) + (this.costPerMinute * time);
      const finalPrice = totalFare * this.surgeMultiplier;

      return finalPrice;
    }
  }
  
  const uberCalculator = new UberPriceCalculator(5, 1.5, 0.2);
  
  // Calculate price for a 10-kilometer ride taking 35 minutes with no surge.
  const priceWithoutSurge = uberCalculator.calculatePrice(10, 35);
  console.log("Price without surge:", priceWithoutSurge);
  
  // Calculate price for the same ride during surge pricing (surge multiplier of 1.5).
  uberCalculator.surgeMultiplier = 1.5;
  const priceWithSurge = uberCalculator.calculatePrice(10, 15);
  console.log("Price with surge:", priceWithSurge);
  