import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import SpaceAge from './js/galactic.js';

$(document).ready(function() {
  $('#user-input').submit(function(event) {
    event.preventDefault();
    const userAge = parseInt($('#user-age').val());
    const userExp = parseInt($('#user-exp').val());
    const newInput = new SpaceAge(userAge, userExp);
    const mercAge = newInput.mercuryAge();
    // const mercExp = newInput.mercuryExp();
    $('#mercury-age').append(`<p>${mercAge}</p>`);
  });
});