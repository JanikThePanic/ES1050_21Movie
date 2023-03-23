// hide the video player
$('#video').hide();

// setup system variables
let system = {
  index: 0,
  play: false
}

$('.gallery').on( 'change.flickity', function( event, index ) {
  system.index = index
  console.log( 'Slide changed to ' + movies[system.index].title)
});

// i]f video is selected
$('.gallery').on( 'staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
    if (!cellElement) {
      return;
    }
    // define the path and start the movie
    let path = './movies/' + movies[system.index].title + '.' + movies[system.index].type;
    startMovie(path);
});

// when video ends
$(document).ready(function(){
  $('#video').on('ended',function(){
    startMenu();
  });
});

function startMenu() {
  system.play = false;
  $('.gallery').show();
  $('#video').hide();
  console.log("Closed video and returned to menu.");
}

function startMovie(path) {
  system.play = true;
  $('.gallery').hide();
  $('#video').show();
  $('#video').attr('src', path);
  $('#video')[0].load();
  console.log("Loaded video with path: " + path);
}