/* ---------------------------------------------------------
 * Miscellaneous
 * --------------------------------------------------------- */

new WOW().init();

function getParameters() {
  var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {},
    tmp;

  for (var i = 0, paramsLength = params.length; i < paramsLength; i++) {
    tmp = params[i].split('=');
    data[tmp[0]] = tmp[1];
  }

  return data;
}

/* ---------------------------------------------------------
 * Arrows
 * --------------------------------------------------------- */

$('.section-down-arrow').click(function () {
  $.scrollTo($('.content'), 800, {
    offset: {
      top: -56
    }
  });
});

/* ---------------------------------------------------------
 * Fetching Project
 * --------------------------------------------------------- */

var project;

window.onload = function () {
  var params = getParameters()

  for (var i = 0, projectsAmount = projects.length; i < projectsAmount; i++) {
    if (projects[i].id == params.id) {
      project = projects[i];
      break;
    }
  }

  loadProjectInfo()
  loadScreenshots()
  loadFacts()
  loadTechnologiesUsed()
}

/* ---------------------------------------------------------
 * Project Info
 * --------------------------------------------------------- */

function loadProjectInfo() {
  $("#header-title").html(project.name);
  $("#description").html(project.description);
}

/* ---------------------------------------------------------
 * Screenshots
 * --------------------------------------------------------- */

function loadScreenshots() {
  var screenshotsAmount = project.screenshotsAmount

  if (screenshotsAmount > 0) {
    document.getElementById("screenshots").style.display = "block";
    var folder = project.folder

    const flickitySelector = "#screenshots-carousel"
    const flickityOptions = {
      friction: 0.3,
      // smaller number = easier to flick farther

      groupCells: true,
      // group cells together in slides

      prevNextButtons: false,
      // creates and enables buttons to click to previous & next cells

      resize: false,
      // listens to window resize events to adjust size & positions

      wrapAround: false
      // at end of cells, wraps-around to first for infinite scrolling
    }

	var screenshotsCarousel;

    const carousel = document.querySelector("#screenshots-carousel");
    for (var i = 1; i <= screenshotsAmount; i++) {
      var screenshot = document.createElement('img');
      screenshot.className = 'screenshot';

	  $(screenshot).on('load', function() {
        flickityOptions.wrapAround = shouldWrapAround();
        screenshotsCarousel = new Flickity(flickitySelector, flickityOptions);
	
        $(window).resize(function () {
          if ('destroy' in screenshotsCarousel) {
            screenshotsCarousel.destroy();
            flickityOptions.wrapAround = shouldWrapAround();
            screenshotsCarousel = new Flickity(flickitySelector, flickityOptions);
          }
        });
      });

      screenshot.src = "img/projects/" + folder + "/screenshot_" + i + ".png";

      carousel.append(screenshot);
    }
  }
}

/**
 * Return true if (cells - 1) total width >= carousel width, else false.
 */
function shouldWrapAround() {
  const carousel = document.querySelector("#screenshots-carousel");
  const cells = carousel.querySelectorAll(".screenshot");

  if (carousel && cells) {
    const style = window.getComputedStyle(cells[0]);
    const cellWidth = parseFloat(style.width) +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight);
    const carouselWidth = parseFloat(window.getComputedStyle(carousel).width);
    return cellWidth * (cells.length - 1) >= carouselWidth;
  }

  return false;
}

/* ---------------------------------------------------------
 * Facts
 * --------------------------------------------------------- */

function loadFacts() {
  if (project.rating != null && project.installs != null) {
    document.getElementById("facts").style.display = "block";

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

    let anim1 = new CountUp('count1', 0, project.rating, 1, 1.5, options1);
    let anim2 = new CountUp('count2', 0, project.installs, 0, 1.5, options2);

    var waypointS1 = new Waypoint({
      element: document.getElementById('count1'),
      handler: function () {
        anim1.start();
      },
      offset: '100%'
    });

    var waypointS2 = new Waypoint({
      element: document.getElementById('count2'),
      handler: function () {
        anim2.start();
      },
      offset: '100%'
    });
  }
}

/* ---------------------------------------------------------
 * Technologies Used
 * --------------------------------------------------------- */

function loadTechnologiesUsed() {
  project.tags.forEach(function (tag) {
    var technology = technologies[tag];
    if (typeof technology !== "undefined") {
      var item = document.createElement('div');
      item.className = "technology";

      var icon = document.createElement('img');
      icon.src = "img/technologies/" + technology.icon + ".png";
      item.append(icon);

      var name = document.createElement('p');
      name.textContent = technology.name;
      item.append(name);

      document.getElementById("technologies").appendChild(item);
    }
  });
}
