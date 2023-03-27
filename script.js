$('#video').hide();
// define system
let system = {
  index: 0,
  total: movies.length-1,
  play: false,
  cooldown: false,
  timeout: undefined
}
update();

// key input control
document.addEventListener('keydown', (event) => {
  if(event.keyCode == 65 && !system.cooldown) { // A
    cooldown();

    // start the menu / start the movie
    if(!system.play) {
      startMovie();
    } else {
      startMenu();
    }
  } else if(event.keyCode == 66 && !system.cooldown) { // B
    cooldown();

    // skip to next movie / pause or play
    if(!system.play) {
      advance();
    } else {
      if($("#video").get(0).paused) {
        $('#video').get(0).play();
      } else {
        $('#video').get(0).pause();
      } 
    }
  }
}, false);

// button press cooldown
function cooldown() {
  system.cooldown = true;
  clearTimeout(system.timeout);
  system.timeout = setTimeout(() => {
    cooldownReset();
  }, "250");
}
function cooldownReset() {
  system.cooldown = false;
}

// start menu when video ends
$(document).ready(function(){
  $('#video').on('ended',function(){
    startMenu();
  });
});

// menu controls
function startMenu() {
  system.play = false;
  $('.gallery').show();
  $('#video').hide();
  console.log("Closed video and returned to menu.");
  $('#video').get(0).pause();
}

// movie controls
function startMovie() {
  let path = drive_path + 'movies/' + movies[system.index].title + '.' + movies[system.index].type;
  system.play = true;
  $('.gallery').hide();
  $('#video').show();
  $('#video').attr('src', path);
  $('#video')[0].load();
  console.log("Loaded video with path: " + path);
  $('#video').get(0).play();
}

// advance the movie index
function advance() {
  if(system.index != system.total) {
    system.index++;
  } else {
    system.index = 0;
  };
  update();
  console.log("Advanced to movie: "+ movies[system.index].title + " with index: " + system.index)
}

// calculate next index
function rollover(i, n) {
  if (i > n) {
      return 0;
  } else if (i < 0) {
      return n;
  } else {
      return i;
  }
}

// update gallery images
function update() {
  let left = rollover(system.index+1, system.total);
  if(movies[left].thumbnail) {
    $('#left').attr('src', drive_path + `thumbnails/` + movies[left].title + '.jpg');
  } else {
    $('#left').attr('src', './dependency/no-image.png');
  }
  let right = rollover(system.index-1, system.total);
  if(movies[right].thumbnail) {
    $('#right').attr('src', drive_path + `thumbnails/` + movies[right].title + '.jpg');
  } else {
    $('#right').attr('src', './dependency/no-image.png');
  }
  if(movies[system.index].thumbnail) {
    $('#center').attr('src', drive_path + `thumbnails/` + movies[system.index].title + '.jpg');
  } else {
    $('#center').attr('src', './dependency/no-image.png');
  }
}