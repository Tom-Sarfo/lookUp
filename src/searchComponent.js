import SearchResult from "./SearchResult";
import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import "./SearchComponent.css";
import { useState } from "react";
import Papa from "papaparse";
import { Link, Outlet } from "react-router-dom";

export default function SearchComponent() {
	const [searchInput, setSearchInput] = useState();
	// const [drugData, setDrugData] = useState([]);

	const [drugData, setDrugData] = useState([]);

	function fetchData(inputValue) {
		Papa.parse(
			"https://docs.google.com/spreadsheets/d/e/2PACX-1vQwv6utwnFjzgHBzIo-lbVKhs4P7bNdExtgK_Zag7xVpH9sd4-ZH0P4YV9p3-S5uqhalUlS6RdwdEZX/pub?output=csv",
			{
				download: true,
				header: true,
				complete: (results) => {
					const drugsArray = results.data;
					const filtered = drugsArray.filter((data) => {
						const value = inputValue.toLowerCase();
						return data.DrugName.toLowerCase().includes(value);
					});
					console.log(filtered);
					setDrugData(filtered);
				},
			}
		);
		// console.log(drugData);
	}

	// const fetchData = async (inputValue) => {
	// 	const data = await fetch("https://jsonplaceholder.typicode.com/users");
	// 	const result = await data.json();
	// 	const filtered = result.filter((data) => {
	// 		const value = inputValue.toLowerCase();
	// 		return data.name.toLowerCase().includes(value);
	// 	});
	// 	setDrugData(filtered);
	// };

	const handleChange = (inputValue) => {
		setSearchInput(inputValue);
		fetchData(inputValue);
	};

	function clearInput() {
		setSearchInput("");
	}

	// const drugs = Array.from(drugData);
	// console.log(drugs);

	return (
		<div>
			<section className="SearchWrapper">
				<div className="Search">
					<div className="SearchIcon">
						<SearchIcon />
					</div>
					<SearchInput search={searchInput} setInput={handleChange} />
				</div>
				{searchInput !== "" && (
					<div className="SuggestedList">
						{drugData.map((drug) => {
							return (
								<Link
									to={`/drug_details/${drug.Number}`}
									key={drug.Number}
									onClick={clearInput}
								>
									<SearchResult drug={drug} />
								</Link>
							);
						})}
					</div>
				)}
			</section>
			<div className="detail-container">
				<Outlet context={[drugData]} />
			</div>
		</div>
	);
}
