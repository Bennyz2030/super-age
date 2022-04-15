import { SpaceAge } from '../src/js/galactic.js';

describe ('SpaceAge', ()=> {

  let input;

  beforeEach(()=> {
    input = new SpaceAge(40, 80)
  });

  test('should determine the users age on Mercury', ()=> {
    input.mercuryAge();
    expect(input.mercury).toEqual(9.6);
  }); 

  test('should determine the users age on Venus', ()=> {
    input.venusAge();
    expect(input.venus).toEqual(24.8);
  });

  test('should determine the users age on Mars', ()=> {
    input.marsAge();
    expect(input.mars).toBeCloseTo(75.2);
  });

  test('should determine the users age on Jupiter', ()=> {
    input.jupiterAge();
    expect(input.jupiter).toBeCloseTo(474.4);
  });

  test('should determine how many years the user has left to live on Mercury', ()=> {
    expect(input.mercuryExp()).toEqual(9.6);
  });

  test('should determine how many years the user has left to live on Venus', ()=> {
    expect(input.venusExp()).toEqual(24.8);
  });

  test('should determine how many years the user has left to live on Mars', ()=> {
    expect(input.marsExp()).toBeCloseTo(75.2);
  });

  test('should determine how many years the user has left to live on Jupiter', ()=> {
    expect(input.jupiterExp()).toBeCloseTo(474.4);
  });

  test('should return the amount of years the user has lived past thier life expectency on Mercury', ()=> {
    let input2 = new SpaceAge(80, 40);
    expect(input2.mercuryExp()).toEqual(9.6);
  });

  test('should return the amount of years the user has lived past thier life expectency on Venus', ()=> {
    let input2 = new SpaceAge(80, 40);
    expect(input2.venusExp()).toEqual(24.8);
  });

});