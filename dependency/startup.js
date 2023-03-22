// iterate through the movies
for (let i = 0; i < movies.length; i++) {
    let source = $('<div class="poster"><img src="./thumbnails/' + movies[i] + '.jpg"></div>');
    source.appendTo('.gallery');
}