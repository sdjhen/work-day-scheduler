$(document).ready(function () {
  // Get today using Moment JS
  const today = moment().format('DD MMMM YYYY');
  console.log(today);
  // Append date to DOM
  $('#currentDay').append(`${today}`);
});
