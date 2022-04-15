import SpaceAge from '../src/js/galactic.js';

describe ('SpaceAge', ()=> {

  let input;

  beforeEach(()=> {
    input = new SpaceAge(40, 80)
  });

  test('should determine the users age on Mercury', ()=> {
    expect(input.mercury).toEqual(9.6);
  }); 

  test('should determine the users age on Venus', ()=> {
    expect(input.venus).toEqual(24.8);
  });

  test('should determine the users age on Mars', ()=> {
    expect(input.mars).toBeCloseTo(75.2);
  });

  test('should determine the users age on Jupiter', ()=> {
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
});

describe ('SpaceAge', ()=> {

  let input;

  beforeEach(()=> {
    input = new SpaceAge(80, 40)
  });

  test('should return the amount of years the user has lived past thier life expectency on Mercury', ()=> {
    expect(input.mercuryExp()).toEqual(9.6);
  });

  test('should return the amount of years the user has lived past thier life expectency on Venus', ()=> {
    expect(input.venusExp()).toEqual(24.8);
  });

  test('should return the amount of years the user has lived past thier life expectency on Mars', ()=> {
    expect(input.marsExp()).toBeCloseTo(75.2);
  });

  test('should return the amount of years the user has lived past thier life expectency on Jupiter', ()=> {
    expect(input.jupiterExp()).toBeCloseTo(474.4);
  });
});