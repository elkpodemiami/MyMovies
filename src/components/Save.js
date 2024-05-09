import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

const Save = ({ setMovieState }) => {

    const titleComponent = "Add Movies";
    const [movie, setMovie] = useState({
        title: "",
        description: ""
    });

    const { title, description } = movie;

    const getFormValues = (e) => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }
        setMovie(movie);
        setMovieState(elements => {
            return [...elements, movie]
        });
        SaveInStorage("movies", movie)
    }

    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>
            <strong>
                {
                    (title && description) &&
                    "You have created the movie: " + title + " with description: " + description
                }
            </strong>
            <form onSubmit={getFormValues}>
                <input type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                />
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description">

                </textarea>
                <input
                    type="submit"
                    id="save"
                    value="Save"
                />
            </form>
        </div>
    )
}

export default Save
