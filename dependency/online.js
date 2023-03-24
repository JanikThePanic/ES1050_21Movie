let online = false;

if(window.navigator.onLine) {
    online = true;
}
 
function getPoster(position, title) {
    $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + title + "&callback=?", function(json) {
        if (json.results[0] != undefined){   
            path = 'http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path
            $(position).attr('src', path);
        } else {
            path = './dependency/no-image.png'
            $(position).attr('src', path);
        }
    });
}


