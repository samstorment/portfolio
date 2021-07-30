import './app.css';
import { Header } from "./header/Header";
import { Home } from "./home/Home";

export const App = () => {
	return <div id="app">
		<Header/>
		<main>
			<Home />
		</main>
		<footer style={{padding: '20px', border: '1px solid black'}}>footer</footer>
	</div>
}