/* ---------------------------------------------------------
 * Miscellaneous
 * --------------------------------------------------------- */

new WOW().init();

if (document.location.hash) {
  setTimeout(function() {
    window.scrollTo(window.scrollX, window.scrollY - 56);
  }, 10);
}

$(window).on("load", function() {
  $(".preloader").addClass('scaled');
  $('.preloader').fadeOut('500');
});

/* ---------------------------------------------------------
 * Navigation Bar
 * --------------------------------------------------------- */

var updateNavBar = function() {
  var y = $(this).scrollTop();
  $('.link').each(function(event) {
    if (y >= $($(this).attr('href')).offset().top - $('.navigation').height() - 5) {
      $('.link').not(this).removeClass('active');
      $(this).addClass('active');
    }
  });
};

updateNavBar();
$(window).scroll(updateNavBar);

$('nav ul li').click(function() {
  if ($('.nav-mobile').is(':visible')) {
    $('nav ul').slideToggle();
    $('#nav-toggle').removeClass('active');
  }
  $.scrollTo($($(this).children('a').attr('href')), 800, {
    offset: {
      top: -56
    }
  });
});

/* ---------------------------------------------------------
 * Cover
 * --------------------------------------------------------- */

var coverSubtitle = $('#cover-subtitle');
var array = ["Senior Android Software Engineer at Meta", "Android Kotlin Mentor at Udacity", "Siberian Husky Parent"];
var index = 0;
coverSubtitle.text(array[index]);

setInterval(function() {
  coverSubtitle.animate({opacity: 0}, 500, function() {
    index++;
    if (index == array.length) index = 0;
    coverSubtitle.text(array[index]).animate({opacity: 1}, 500);
  });
}, 2000);

/* ---------------------------------------------------------
 * Arrows
 * --------------------------------------------------------- */

$('#cover-arrow').click(function() {
  $.scrollTo($('.content'), 800, {
    offset: {
      top: -56
    }
  });
});

$('#content-arrow').click(function() {
  $.scrollTo($('#contact'), 800);
});

/* ---------------------------------------------------------
 * Skills Container
 * --------------------------------------------------------- */

var globesTouch = true;
var firstTime = true;
var initializeGlobes = function() {
  if ($('#skills-container').css("content") === "\"no-touch\"") {
    if (firstTime || globesTouch) globesTouch = false;
    else return;
  } else {
    if (firstTime || !globesTouch) globesTouch = true;
    else return;
  }
  firstTime = false;
  var globeOptions = {
    textColour: '#50ff03',
    outlineColour: '#50ff03',
    outlineThickness: 1,
    maxSpeed: 0.06,
    depth: 0.5,
    initial: [0.3, -0.1],
    clickToFront: 500,
    shuffleTags: true,
    noMouse: !globesTouch,
    reverse: true,
    wheelZoom: false,
    zoom: 0.8,
    weight: true,
    weightMode: 'size',
    weightFrom: 'data-weight'
  }
  $('#languages-canvas').tagcanvas(globeOptions);
  $('#libraries-canvas').tagcanvas(globeOptions);
  $('#tools-canvas').tagcanvas(globeOptions);
};

initializeGlobes();
$(window).resize(initializeGlobes);

/* ---------------------------------------------------------
 * Featured On
 * --------------------------------------------------------- */

$('.testimonials').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000
});

/* ---------------------------------------------------------
 * Experience
 * --------------------------------------------------------- */

$("[data-toggle='collapse']").click(function() {
  var id = $('.v-icon[data-target="' + $(this).attr("data-target") + '"]');
  $("i", id).toggleClass("fa-minus fa-plus");
});

/* ---------------------------------------------------------
 * Facts
 * --------------------------------------------------------- */

const options1 = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: ''
};
const options2 = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: '+'
};

let anim1 = new CountUp('count1', 0, 8, 0, 1.5, options1);
let anim2 = new CountUp('count2', 0, 2000000, 0, 1.5, options2);
let anim3 = new CountUp('count3', 0, 100000, 0, 1.5, options2);

var waypointS1 = new Waypoint({
  element: document.getElementById('count1'),
  handler: function() {
    anim1.start();
  },
  offset: '100%'
});

var waypointS2 = new Waypoint({
  element: document.getElementById('count2'),
  handler: function() {
    anim2.start();
  },
  offset: '100%'
});

var waypointS3 = new Waypoint({
  element: document.getElementById('count3'),
  handler: function() {
    anim3.start();
  },
  offset: '100%'
});

/* ---------------------------------------------------------
 * Projects
 * --------------------------------------------------------- */

$(function () {
  $('.selectpicker').selectpicker();
});
