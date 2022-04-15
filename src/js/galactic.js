export class SpaceAge {
  constructor(age) {
    this.age = age;
    this.mercury = 0;
  }

  mercuryAge() {
    this.mercury = this.age * 0.24;
    return this.mercury;
    }

  venusAge() {
    
  }
}