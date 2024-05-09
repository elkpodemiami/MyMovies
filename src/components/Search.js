import React from 'react'

const Search = ({movieState, setMovieState}) => {

    const titleComponent = "Search Movies";
    
    const [search, setSearch] = React.useState("");
    const [notFound, setNotFound] = React.useState(false);

    const searchMovie = (e) => {
        setSearch(e.target.value);
        let foundMovies = movieState.filter(movie => 
            movie.title.toLowerCase().includes(search.toLowerCase())
        );
        if(search.length <= 1 || foundMovies <= 0){
            foundMovies = JSON.parse(localStorage.getItem("movies"));
            setNotFound(true);
        } else {
            setNotFound(false);
        }
        setMovieState(foundMovies);
    }

    return (
        <div className="search">
            <h3 className="title">{titleComponent}: {search}</h3>

            {
                (notFound && search.length > 1) && (
                    <span className="not-found">No movies found</span>
                )
            }
            <form>
                <input
                    type="text"
                    name='search'
                    autoComplete='off'
                    value={search}
                    onChange={ searchMovie }
                />

                <input type="submit" value="Edit" />
            </form>
        </div>
    )
}

export default Search
