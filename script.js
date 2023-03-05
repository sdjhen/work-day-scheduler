$(document).ready(function () {
  // Get today date using Moment JS
  const today = moment().format('DD MMMM YYYY');

  // Append date to DOM
  $('#currentDay').append(`${today}`);

  // Get hour using Moment
  const thisHour = moment().hours();

  // Loop through each timeblock & compare to this hour
  $('.timeblock[data-hour]').each(function () {
    const datahour = $(this).data('hour');
    const hour = moment(datahour, 'HH:mm').hours();
    if (hour < thisHour) {
      $(this).addClass('past');
    } else if (hour == thisHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
});
