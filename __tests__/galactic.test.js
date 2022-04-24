import SpaceAge from '../src/js/galactic.js';

describe ('SpaceAge', ()=> {

  let input;
  let input2;

  beforeEach(()=> {
    input = new SpaceAge(40, 80)
  });

  beforeEach(()=> {
    input2 = new SpaceAge(80, 40)
  });

  test('should determine the users age on Mercury', ()=> {
    expect(input.mercuryAge()).toBeCloseTo(166.66, 1);
  }); 

  test('should determine the users age on Venus', ()=> {
    expect(input.venusAge()).toBeCloseTo(64.51, 1);
  });

  test('should determine the users age on Mars', ()=> {
    expect(input.marsAge()).toBeCloseTo(21.27, 1);
  });

  test('should determine the users age on Jupiter', ()=> {
    expect(input.jupiterAge()).toBeCloseTo(3.37, 1);
  });

  test('should determine how many years the user has left to live on Mercury', ()=> {
    expect(input2.mercuryExp()).toBeCloseTo(166.66, 1);
  });

  test('should determine how many years the user has left to live on Venus', ()=> {
    expect(input2.venusExp()).toBeCloseTo(64.51, 1);
  });

  test('should determine how many years the user has left to live on Mars', ()=> {
    expect(input2.marsExp()).toBeCloseTo(21.28), 1;
  });

  test('should determine how many years the user has left to live on Jupiter', ()=> {
    expect(input2.jupiterExp()).toBeCloseTo(3.37, 1);
  });

  test('should return the amount of years the user has lived past thier life expectency on Mercury', ()=> {
    expect(input2.mercuryExp()).toBeCloseTo(166.66, 1);
  });

  test('should return the amount of years the user has lived past thier life expectency on Venus', ()=> {
    expect(input2.venusExp()).toBeCloseTo(64.51, 1);
  });

  test('should return the amount of years the user has lived past thier life expectency on Mars', ()=> {
    expect(input2.marsExp()).toBeCloseTo(21.28), 1;
  });

  test('should return the amount of years the user has lived past thier life expectency on Jupiter', ()=> {
    expect(input2.jupiterExp()).toBeCloseTo(3.37, 1);
  });
  
});