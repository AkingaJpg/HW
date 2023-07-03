const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];


function byProperty(propertyName, sortDirection) {
    const func = (a, b) => {
        let aPropertyValue = a[propertyName];
        let bPropertyValue = b[propertyName];
        if (sortDirection === ">") {
            return aPropertyValue - bPropertyValue
        }       if (sortDirection === "<") {
            return bPropertyValue - aPropertyValue
        }
    }
    return func;
}


//console.log(movies.sort(byProperty('releaseYear', '>')).map(x => x.movieName)); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
//console.log(movies.sort(byProperty('runningTimeInMinutes', '<')).map(x => x.movieName)); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
//console.log(movies.sort(byProperty('movieName', '>')).map(x => x.movieName)); // виведе масив фільмів посортованих по назві, в алфавітному порядку*

console.log(movies.sort(byProperty('releaseYear', '>')));
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.sort(byProperty('movieName', '>')));
