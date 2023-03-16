// jQuery
$('#video').hide();
let system = {
  index: 0,
  play: false
}

$('.gallery').on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
    // dismiss if cell was not clicked
    if ( !cellElement ) {
      return;
    }
    console.log(cellIndex);
    $('.gallery').hide();
    $('#video').show();
});

