$(document).ready(function() {
  $('button').click(function() {
    var fizzBuzz = function (number) {
    $('.numberList').empty();
      for (i = 1; i <= 100; i++) {
        if (i%15 === 0) {
          $('.numberList').append('fizz buzz' + '<br/>');
        }
        else if (i%3 === 0) {
          $('.numberList').append('fizz' + '<br/>');
        }
        else if (i%5 === 0) {
          $('.numberList').append('buzz' + '<br/>');
        }
        else {
          $('.numberList').append(i + '<br/>');
        }
      };
    };
    if(+$('input').val()) {
      fizzBuzz($('input').val());
    }
    else {
      alert('Oh No! Please enter a number.');
    }
    $('input').val('');
  }); 
});
