import SpaceAge from '../src/js/galactic.js';

describe ('SpaceAge', ()=> {

  let input;

  beforeEach(()=> {
    input = new SpaceAge(40, 80)
  });

  test('should determine the users age on Mercury', ()=> {
    expect(input.mercury).toBeCloseTo(166.66, 1);
  }); 

  test('should determine the users age on Venus', ()=> {
    expect(input.venus).toBeCloseTo(64.51, 1);
  });

  test('should determine the users age on Mars', ()=> {
    expect(input.mars).toBeCloseTo(21.27, 1);
  });

  test('should determine the users age on Jupiter', ()=> {
    expect(input.jupiter).toBeCloseTo(3.37, 1);
  });

  test('should determine how many years the user has left to live on Mercury', ()=> {
    expect(input.mercuryExp()).toBeCloseTo(166.66, 1);
  });

  test('should determine how many years the user has left to live on Venus', ()=> {
    expect(input.venusExp()).toBeCloseTo(64.51, 1);
  });

  test('should determine how many years the user has left to live on Mars', ()=> {
    expect(input.marsExp()).toBeCloseTo(21.28), 1;
  });

  test('should determine how many years the user has left to live on Jupiter', ()=> {
    expect(input.jupiterExp()).toBeCloseTo(3.37, 1);
  });
});

describe ('SpaceAge', ()=> {

  let input;

  beforeEach(()=> {
    input = new SpaceAge(80, 40)
  });

  test('should return the amount of years the user has lived past thier life expectency on Mercury', ()=> {
    expect(input.mercuryExp()).toBeCloseTo(166.66, 1);
  });

  test('should return the amount of years the user has lived past thier life expectency on Venus', ()=> {
    expect(input.venusExp()).toBeCloseTo(64.51, 1);
  });

  test('should return the amount of years the user has lived past thier life expectency on Mars', ()=> {
    expect(input.marsExp()).toBeCloseTo(21.28), 1;
  });

  test('should return the amount of years the user has lived past thier life expectency on Jupiter', ()=> {
    expect(input.jupiterExp()).toBeCloseTo(3.37, 1);
  });
});auhs