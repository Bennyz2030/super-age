export default class SpaceAge {
  constructor(age, lifeExp) {
    this.age = age;
    this.lifeExp = lifeExp;
    this.mercury = (this.age / 0.24);
    this.venus = (this.age / 0.62);
    this.mars = (this.age / 1.88);
    this.jupiter = (this.age / 11.86);
  }

  mercuryExp() {
    this.lifeExp = this.lifeExp / 0.24;
    if (this.lifeExp < this.mercury) {
      return (this.lifeExp - this.mercury) * -1;
    } else {
      return this.lifeExp - this.mercury;
    }
  }

  venusExp() {
    this.lifeExp = this.lifeExp / 0.62;
    if (this.lifeExp < this.venus) {
      return (this.lifeExp - this.venus) * -1;
    } else {
      return this.lifeExp - this.venus;
    }
  }

  marsExp() {
    this.lifeExp = this.lifeExp / 1.88;
    if (this.lifeExp < this.mars) {
      return (this.lifeExp - this.mars) * -1;
    } else {
      return this.lifeExp - this.mars;
    }
  }

  jupiterExp() {
    this.lifeExp = this.lifeExp / 11.86;
    if (this.lifeExp < this.jupiter) {
      return (this.lifeExp - this.jupiter) * -1;
    } else {
      return this.lifeExp - this.jupiter;
    }
  }
}