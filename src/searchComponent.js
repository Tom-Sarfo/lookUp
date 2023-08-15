import SearchResult from "./SearchResult";
import SearchIcon from "@mui/icons-material/Search";
import SearchInput from "./SearchInput";
import "./SearchComponent.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function SearchComponent() {
	const [searchInput, setSearchInput] = useState();
	const [drugData, setDrugData] = useState([]);

	const fetchData = async (inputValue) => {
		const data = await fetch("https://jsonplaceholder.typicode.com/users");
		const result = await data.json();
		const filtered = result.filter((data) => {
			const value = inputValue.toLowerCase();
			return data.name.toLowerCase().includes(value);
		});
		setDrugData(filtered);
	};

	const handleChange = (inputValue) => {
		setSearchInput(inputValue);
		fetchData(inputValue);
	};

	function clearInput() {
		setSearchInput("");
	}

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
									to={`/drug_details/${drug.id}`}
									key={drug.id}
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
				<Outlet />
			</div>
		</div>
	);
}
