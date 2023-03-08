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

  // Save user input on click
  $('.saveBtn').click(function () {
    // Get the index of the clicked button
    const index = $('.saveBtn').index($(this));

    // Get user input from Timeblocks
    const userInput = $('.timeblock-input').eq(index).val();

    // Assign local storage key
    const key = `Timeblock ${index}`;

    // Save user input to local storage
    localStorage.setItem(key, userInput);

    // Alert user that input saved to local storage
    const lsAlert = $('<p>Saved to local storage!</p>');
    // Append alert to DOM on click
    $('#ls-alert').append(lsAlert);
    $('.to-show').show(); // Reveal alert hidden by CSS

    setTimeout(function () {
      lsAlert.fadeOut('slow', function () {
        $('#ls-alert').remove();
      });
    }, 2000); // Disappear after 2s
  });

  // Retrieve user input and persist on refresh
  $('.timeblock-input').each(function (index) {
    const key = `Timeblock ${index}`;
    const value = localStorage.getItem(key);
    if (value != null) {
      $(this).val(value);
    }
  });
});
