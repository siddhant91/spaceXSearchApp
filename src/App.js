/**
 * Root Entry of the Application , Wrap the  child components with App level providers here
 * If Any routing is applicable have the routes file added here than Components directly
 */
// Components
import PageLayout from './layouts/PageLayout';
import Home from './pages/home';

// Providers
import { AppProvider } from './contexts/AppContext';

function App() {
	return (
		<AppProvider>
			<div className="spacex-app">
				<PageLayout title="SpaceX Launch Programs" devName="Siddhant Wadhera">
					<Home />
				</PageLayout>
			</div>
		</AppProvider>
	);
}

export default App;
