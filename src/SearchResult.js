export default function SearchResult({ drug }) {
	return (
		<div className="SearchResult">
			<p>{drug.DrugName}</p>
		</div>
	);
}
