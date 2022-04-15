import { SpaceAge } from '../src/js/galactic.js';

describe ('SpaceAge', ()=> {

  test('should determine the users age on Mercury', ()=> {
    const input = new SpaceAge(40);
    input.mercuryAge();
    expect(input.mercury).toEqual(9.6);
  }); 

})