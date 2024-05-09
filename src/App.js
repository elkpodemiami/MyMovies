import { useState } from "react";
import List from "./components/List";
import Save from "./components/Save";
import Search from "./components/Search";

function App() {

	const [moviesState, setMoviesState] = useState([]);

	return (
		<div className="layout">
			{/* Header */}
			<header className="header">
				<div className="logo">
					<div className="play"></div>
				</div>
				<h1>My Movies</h1>
			</header>
			{/* Nav Bar */}
			<nav className="nav">
				<ul>
					<li><a href="/#">Home</a></li>
					<li><a href="/#">Home</a></li>
					<li><a href="/#">Home</a></li>
					<li><a href="/#">Home</a></li>
				</ul>
			</nav>

			{/* Main Content */}
			<section className="content">
				{/* Movies */}
				<List movieState={moviesState} setMovieState={setMoviesState} />
			</section>

			{/* Lateral Content */}
			<aside className="lateral">
				<Search movieState={moviesState} setMovieState={setMoviesState} />
				<Save setMovieState={setMoviesState} />
			</aside>

			{/* Footer */}
			<footer className="footer">
				&copy; Movies made By Lucas Aguiar
			</footer>

		</div>

	);
}

export default App;
