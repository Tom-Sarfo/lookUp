import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import NavBar from "./navBar";
import SearchComponent from "./SearchComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routers } from "./router";

function App() {
	const router = createBrowserRouter(Routers);
	return (
		<div className="App">
			<nav>
				<NavBar />
			</nav>
			<div className="content">
				<RouterProvider router={router}>
					<SearchComponent />
				</RouterProvider>
			</div>
		</div>
	);
}

export default App;
