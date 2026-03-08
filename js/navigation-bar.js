/* ---------------------------------------------------------
 * Navigation Bar
 * --------------------------------------------------------- */

$('#nav-toggle').click(function() {
  $('nav ul').slideToggle();
  this.classList.toggle('active');
  if ($('.navigation').hasClass('solid')) {
    if ($(window).scrollTop() < 50) {
      setTimeout(function() {
        $('.navigation').removeClass('solid');
        $('nav ul').removeClass('solid');
        $('nav ul li a').removeClass('solid');
      }, 300);
    }
  } else {
    $('.navigation').addClass('solid');
    $('nav ul').addClass('solid');
    $('nav ul li a').addClass('solid');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() >= 50) {
    $('.navigation').addClass('solid');
    $('nav ul').addClass('solid');
    $('nav ul li a').addClass('solid');
  } else {
    if (!$('#nav-toggle').hasClass('active')) {
      $('.navigation').removeClass('solid');
      $('nav ul').removeClass('solid');
      $('nav ul li a').removeClass('solid');
    }
  }
});
