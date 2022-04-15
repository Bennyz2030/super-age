import { SpaceAge } from '../src/js/galactic.js';

describe ('SpaceAge', ()=> {

  test('should determine the users age on Mercury', ()=> {
    const input = new SpaceAge(40);
    input.mercury();
    expect(input.mercuryAge).toEqual(9.6);
  }); 
  
})