import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ResultDetails() {
	const [drugs] = useOutletContext();
	const { drugId } = useParams();
	console.log(drugId);
	console.log(drugs, "bug");
	return (
		<div className="detail-container">
			{drugs
				.filter((drug) => drug.Number === drugId)
				.map((drug) => {
					// return drug.name;
					return (
						<table>
							<tbody>
								<tr>
									<td width={300}>{drug.DrugName}</td>
									<td>
										<b>¢{drug.PriceList}</b>
									</td>
								</tr>
								<tr>
									<td>Quantity Available</td>
									<td>
										<b>{drug.Availability}pks</b>
									</td>
								</tr>
								{drug.Alternative !== "" ? (
									<tr>
										<td>
											{drug.Alternative}(<b>alternative</b>)
										</td>
										<td>
											<b>¢20</b>
										</td>
									</tr>
								) : (
									<tr>
										<td>
											<b>(No alternative available)</b>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					);
				})}
		</div>
	);
}
