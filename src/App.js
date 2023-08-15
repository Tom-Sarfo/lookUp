import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

import NavBar from "./NavBar";
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
			<RouterProvider router={router}>
				<div className="content">
					{/* <Outlet /> */}
					<SearchComponent />
				</div>
			</RouterProvider>
		</div>
	);
}

export default App;
