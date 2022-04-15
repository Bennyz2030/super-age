export class SpaceAge {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
  }

  mercuryAge() {
    this.mercury = this.age * 0.24;
    return this.mercury;
  }

  venusAge() {
    this.venus = this.age * 0.62;
    return this.venus;
  }

  marsAge() {
    this.mars = this.age * 1.88;
    return this.mars;
  }

  jupiterAge() {
    this.jupiter = this.age * 11.86;
    return this.jupiter;
  }

  mercuryExp() {
    this.mercury = this.age * 0.24;
    this.lifeExp = this.lifeExp * 0.24;
    return this.lifeExp - this.mercury;
  }

  venusExp() {
    this.venus = this.age * 0.62;
    this.lifeExp = this.lifeExp * 0.62;
    return this.lifeExp - this.venus;
  }

  marsExp() {
    this.mars = this.age * 1.88;
    this.lifeExp = this.lifeExp * 1.88;
    return this.lifeExp - this.mars;
  }

  jupiterExp() {
    this.jupiter = this.age * 11.86;
    this.lifeExp = this.lifeExp * 11.86;
    return this.lifeExp - this.jupiter;
  }
}