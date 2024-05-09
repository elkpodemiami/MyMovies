import React, { useEffect, useState } from 'react'
import Edit from './Edit';

const List = ({ movieState, setMovieState }) => {

    // const [movies, setMovies] = useState([]);

    const [editing, setEditing] = useState(0);

    useEffect(() => {
        getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("movies"));
        setMovieState(movies);
        return movies;
    }

    const deleteMovie = (id) => {
        let movies = movieState.filter(movie => movie.id !== parseInt(id));
        setMovieState(movies);
        localStorage.setItem("movies", JSON.stringify(movies));
    }


    return (
        <>
            {
                movieState && movieState.length > 0 ?
                    movieState.map(movie => {
                        return (
                            <article key={movie.id} className="movie-item">
                                <h3 className="title">{movie.title}</h3>
                                <p className="description">{movie.description}</p>
                                <button className="edit" onClick={() => {
                                    setEditing(movie.id)
                                }}>Edit</button>
                                <button className="delete" onClick={() => {
                                    deleteMovie(movie.id)
                                }}>Delete</button>


                                {/* Edit */}
                                {editing === movie.id && (
                                    <Edit 
                                    movie={movie} 
                                    getMovies={getMovies} 
                                    setMovieState={setMovieState}
                                    setEditing={setEditing}
                                    />
                                )}

                            </article>
                        )
                    })
                    : <h2>No movies</h2>
            }
        </>
    )
}

export default List