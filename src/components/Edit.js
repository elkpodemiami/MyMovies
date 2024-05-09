import React from 'react'

const Edit = ({ movie, getMovies, setMovieState, setEditing }) => {

    const titleComponent = "Edit Movies";

    const saveMovie = (e, id) => {
        e.preventDefault();
        let target = e.target;
        const savedMovies = getMovies();
        let index = savedMovies.findIndex(movie => movie.id === parseInt(id));
        savedMovies[index].title = target.title.value;
        savedMovies[index].description = target.description.value;
        localStorage.setItem("movies", JSON.stringify(savedMovies));
        setMovieState(savedMovies);
        setEditing(0);
    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titleComponent}</h3>
            <form onSubmit={ e => saveMovie(e, movie.id)}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="title_edited"
                    defaultValue={movie.title}
                />
                <textarea
                    defaultValue={movie.description}
                    name="description"
                    className="description_edited"
                />
                <input
                    type="submit"
                    className='edit'
                    value="Update"
                />
            </form>
        </div>
    )
}

export default Edit
