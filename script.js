// hide the video player
$('#video').hide();

// setup system variables
let system = {
  index: 0,
  play: false
}

// if video is selected
$('.gallery').on( 'staticClick.flickity', function(event, pointer, cellElement, cellIndex) {

    // dismiss if cell was not clicked
    if (!cellElement) {
      return;
    }
    // show the video stream and change the src
    $('.gallery').hide();
    $('#video').show();
    $('#video').attr('src', './movies/' + movies[system.index] + '.mp4');
    $('#video')[0].load();
    console.log("Selected slide " + cellIndex + " and loaded video with path " + './movies/' + movies[system.index] + '.mp4');

    // change the playmode
    system.play = true;
});

// if video player is pressed
$('#video').keydown(function() {

  // return the gallery
  $('.gallery').show();
  $('#video').hide();

  // change the playmode
  system.play = false;
});

$('.gallery').on( 'change.flickity', function( event, index ) {
  console.log( 'Slide changed to ' + index )
});