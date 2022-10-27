import HomePage from "./pages/HomePage";
import CreateNewWallet from "./pages/CreateNewWallet";

const routes = [
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: '/create',
		element: <CreateNewWallet />
	}
];

export default routes;
