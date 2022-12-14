import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import routes from './routes';


const App = () => {
	const routing = useRoutes(routes);

	return (
		<>
			<CssBaseline />
      		{routing}
		</>
	);
};

export default App;
