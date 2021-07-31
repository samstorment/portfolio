import './app.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from "./components/home/Home";
import { Footer } from './components/layout/footer/Footer';
import { Header } from "./components/layout/header/Header";
import { FourOFour } from './components/FourOFour/FourOFour';
import { Contact } from './components/contact/Contact';
import { Resume } from './components/resume/Resume';
import { ProjectList } from 'components/project-list/ProjectList';

export const App = () => {
	return <div id="app">
		<Router>
			<Header />
			<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/resume" component={Resume} />
						<Route exact path="/projects" component={ProjectList} />
						<Route path="/" component={FourOFour} />
					</Switch>
			</main>
			<Footer />
		</Router>
	</div>
}