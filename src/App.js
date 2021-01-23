/**
 * Root Entry of the Application , Wrap the  child components with App level providers here
 * If Any routing is applicable have the routes file added here than Components directly
 */
// Components
import Home from './pages/home';

function App() {
	return (
		<div className="App">
			<Home />
		</div>
	);
}

export default App;
