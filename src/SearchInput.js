import { useForm } from "react-hook-form";
import { useState } from "react";
import "./SearchInput.css";

export default function SearchInput({ search, setInput }) {
	const { register } = useForm({
		defaultValues: {
			searchField: search,
		},
	});
	return (
		<div className="SearchInput">
			<input
				type="text"
				{...register("searchField")}
				placeholder="Search Drug"
				onChange={(e) => setInput(e.target.value)}
			/>
		</div>
	);
}
