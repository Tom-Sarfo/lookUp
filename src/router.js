import SearchComponent from "./searchComponent.js";
import ResultDetails from "./resultDetails.js";

export const Routers = [
	{
		path: "/",
		element: <SearchComponent />,
		children: [
			{
				path: "/drug_details/:drugId",
				element: <ResultDetails />,
			},
		],
	},
];
