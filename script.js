$('#video').hide();
let system = {
  index: 0,
  total: movies.length-1,
  play: false
}
update();

document.addEventListener('keydown', (event) => {
  if(event.keyCode == 65) { // A
    if(!system.play) {
      startMovie();
    } else {
      startMenu();
    }
  } else if(event.keyCode == 66) { // B
    if(!system.play) {
      advance();
    }
  }
}, false);

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

function startMovie() {
  let path = drive_path + 'movies/' + movies[system.index].title + '.' + movies[system.index].type;
  system.play = true;
  $('.gallery').hide();
  $('#video').show();
  $('#video').attr('src', path);
  $('#video')[0].load();
  console.log("Loaded video with path: " + path);
}

function advance() {
  if(system.index != system.total) {
    system.index++;
  } else {
    system.index = 0;
  };
  update();
  console.log("Advanced to movie: "+ movies[system.index].title + " with index: " + system.index)
}

function rollover(i, n) {
  if (i > n) {
      return 0;
  } else if (i < 0) {
      return n;
  } else {
      return i;
  }
}

function update() {
  let left = rollover(system.index-1, system.total);
  if(movies[left].thumbnail) {
    $('#left').attr('src', drive_path + `thumbnails/` + movies[left].title + '.jpg');
  } else if(online) {
    getPoster('#left', movies[left].title);
  } else {
    $('#left').attr('src', './dependency/no-image.png');
  }

  let right = rollover(system.index+1, system.total);
  if(movies[right].thumbnail) {
    $('#right').attr('src', drive_path + `thumbnails/` + movies[right].title + '.jpg');
  } else if(online) {
    getPoster('#right', movies[right].title);
  } else {
    $('#right').attr('src', './dependency/no-image.png');
  }

  if(movies[system.index].thumbnail) {
    $('#center').attr('src', `./assets/` + movies[system.index].title + '.jpg');
  } else if(online) {
    getPoster('#center', movies[system.index].title);
  } else {
    $('#center').attr('src', './dependency/no-image.png');
  }
}