// iterate through the movies
for (let i = 0; i < movies.length; i++) {
    let source = $('<div class="poster"><img src="./dependency/no-image.png">' + '<div class="title">' + movies[i].title + '</div></div>');
    if(movies[i].thumbnail) {
        source = $('<div class="poster"><img src="./thumbnails/' + movies[i].title + '.jpg"></div>');
    }
    source.appendTo('.gallery');
}