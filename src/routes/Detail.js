import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const id = useParams().id;
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <h1>Detail</h1>
                    <img src={movie.medium_cover_image} alt={movie.title} />
                    <h2>{movie.title_long}</h2>
                    <p>
                        <h5>Description</h5>
                        <span>{movie.description_intro}</span>
                    </p>
                    <p>
                        <span>
                            <strong>Rating</strong>
                        </span>
                        <div>{movie.rating}</div>
                    </p>
                    <p>
                        <span>
                            <strong>language</strong>
                        </span>
                        <div>{movie.language}</div>
                    </p>
                    <p>
                        <span>
                            <strong>genres</strong>
                        </span>
                        <div>
                            <ul>
                                {movie.genres.map(g => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Detail;
