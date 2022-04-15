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
    const mercAge = newInput.mercury;
    // const mercExp = newInput.mercuryExp();
    const venusAge = newInput.venus;
    // const venusExp = newInput.venusExp();
    const marsAge = newInput.mars;
    const jupiterAge = newInput.jupiter;
    $('#mercury').append(`<p>Your age on <strong>Mercury</strong> is ${mercAge} years</p>`);
    $('#venus').append(`<p>Your age on <strong>Venus</strong> is ${venusAge} years</p>`);
    $('#mars').append(`<p>Your age on <strong>Mars</strong> is ${marsAge} years</p>`);
    $('#jupiter').append(`<p>Your age on <strong>Jupiter</strong> is ${jupiterAge} years</p>`);
  });
});