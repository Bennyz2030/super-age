import { SpaceAge } from '../src/js/galactic.js';

describe ('SpaceAge', ()=> {

  let input;

  beforeEach(()=> {
    input = new SpaceAge(40)
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

});