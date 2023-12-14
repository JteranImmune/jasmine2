// Crea un nuevo array que contenga solo los títulos de las películas.

function getTitles(movies) {

    if(movies.length != 0){
        const moviesTitles = movies.map((movie) => {
            return movie.title;
        });
        return moviesTitles;
    }

    return null;
}


// Devuelve el título y el director de cada película.

function getTitlesAndDirectors(movies) {
    
    if(movies.length != 0){
        const titlesDirector = movies.map((movie) => {
            const obj = {title: movie.title, director: movie.director};
            return obj;
        })
        return titlesDirector;
    }

    return null;

}

// Imprime el título de cada película que fue lanzada después del año 2000.


function getTitlesAfter2000(movies) {

    if(movies.length != 0){
        const titlesArray = [];
        movies.filter((movie) =>{
            if(movie.year > 2000){
                titlesArray.push(movie.title);
                return titlesArray; 
            }
        });
       return titlesArray;
    }
    return null;
}

// Crea un nuevo array que contenga objetos con el título de la película y el año de lanzamiento.

function getTitlesAndYears(movies) {

    if(movies.length != 0){

        const titlesAndYear = movies.map((movie) => {
            const obj = {title: movie.title, year: movie.year};
            console.log(obj);
            return obj;
        });

        console.log(titlesAndYear);
        return titlesAndYear;
    }
    return null;
}


// Crea un nuevo array que contenga el número de géneros de cada película.

function getNumberOfGenres(movies) {

    if(movies.length != 0){ 

        const numbersOfGenres = movies.map((movie) =>{
            
        if(!movie.genres){
            return 0;
        }
            return movie.genres.length;
        });
        //console.log(numbersOfGenres);
        return numbersOfGenres;
    }

    return null;
}

// Crea un nuevo array que contenga solo las películas lanzadas después del año 2000.

function filterMoviesAfter2000(movies) {


    const moviesAfter2000 = movies.filter((movie) =>{
        if(movie.year > 2000){
            return true; 
        }
    });
    
    return moviesAfter2000;


}

// Crea un nuevo array que contenga solo las películas dirigidas por ‘Christopher Nolan’.

function filterNolanMovies(movies) {

    const NolanMovies = movies.filter((movie) => {

        if(movie.director.toLowerCase().split(" ").join() === 'christophernolan' ){
            return true;
        }
    });

    return NolanMovies;
}

// Crea un nuevo array que contenga solo las películas que son del género ‘Drama’.

function filterDramaMovies(movies) {

    //debugger;
    const dramaMovies = movies.filter((movie) => {    
        const dramaGenre = movie.genres.includes('Drama');
        return dramaGenre;
    });

    return dramaMovies;

}

// Ordena las películas por año de lanzamiento en orden ascendente Y si son iguales por el título.

function sortByYear(movies) {

    //debugger;
    if(movies.length != 0){
        const releasedYear = movies.sort((movie1, movie2) =>{
            if(movie1.year === movie2.year){
                return movie1.title.localeCompare(movie2.title);
            } else {
                return movie1.year - movie2.year;
            }
        });
        return releasedYear;
    } 

    return null;

}

// Ordena las películas por el número de géneros en orden descendente, si son iguales por el año y si son del mismo año por el título.

function sortByNumberOfGenres(movies) {

    if(movies.length != 0){

        const numbersOfGenres = movies.sort((movie1, movie2) =>{

            if(movie1.genres.length === movie2.genres.length){
                if(movie1.year === movie2.year){
                    return movie2.title.localeCompare(movie1.title);
                } else {
                    return movie2.year - movie1.year;
                }
              } 
            return movie2.genres.length - movie1.genres.length;
        });

        return numbersOfGenres;
    }

    return null;

}

// Ordena las películas por el nombre del director en orden alfabético.

function sortByDirector(movies) {
    
    if(movies.length != 0){
        
        const director = movies.sort((movie1, movie2) =>{
            return movie2.director.localeCompare(movie1.director);
        });

        return director;
    }

    return null;

}

// Devuelve la suma total de todos los géneros de las películas.

function getTotalNumberOfGenres(movies) {}

// Encuentra la película con el título más largo.

function getMovieWithLongestTitle(movies) {}

// Encuentra el número de películas lanzadas cada año.

function getNumberOfMoviesPerYear(movies) {}

// Encuentra la primera película dirigida por ‘Quentin Tarantino’.

function findFirstTarantinoMovie(movies) {}

// Encuentra la primera película que es del género ‘Adventure’.

function findFirstAdventureMovie(movies) {}

// Encuentra la primera película lanzada antes de 2000.

function findFirstMovieBefore2000(movies) {}

// Encuentra el número de películas dirigidas por ‘Christopher Nolan’ que son del género ‘Drama’.

function getNumberOfNolanDramaMovies(movies) {}

// Encuentra el título de la película más antigua que es del género ‘Sci-Fi’.

function getTitleOfOldestSciFiMovie(movies) {}

// Encuentra el número de géneros únicos en todas las películas.

function getNumberOfUniqueGenres(movies) {}

// Encuentra el director que ha dirigido más películas.

function getDirectorWithMostMovies(movies) {}

// Encuentra el año con el mayor número de películas lanzadas.

function getYearWithMostMovies(movies) {}
