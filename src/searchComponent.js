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
			return data.name.toLowerCase().includes(inputValue);
		});
		setDrugData(filtered);
	};

	const handleChange = (inputValue) => {
		setSearchInput(inputValue);
		fetchData(inputValue);
	};

	return (
		<div>
			<section className="SearchWrapper">
				<div className="Search">
					<div className="SearchIcon">
						<SearchIcon />
					</div>
					<SearchInput search={searchInput} setInput={handleChange} />
				</div>
				<Link to="">
					<div className="SuggestedList">
						{drugData.map((drug) => {
							return <SearchResult key={drug.id} drug={drug} />;
						})}
					</div>
				</Link>
			</section>
			<Outlet />
		</div>
	);
}
