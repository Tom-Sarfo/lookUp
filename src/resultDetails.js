import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ResultDetails() {
	const [drugs] = useOutletContext();
	const { drugId } = useParams();
	console.log(drugId);

	return (
		<div className="detail-container">
			{drugs
				.filter((drug) => drug.id === Number(drugId))
				.map((drug) => {
					// return drug.name;
					return (
						<table>
							<tbody>
								<tr>
									<td width={300}>{drug.name}</td>
									<td>
										<b>¢19</b>
									</td>
								</tr>
								<tr>
									<td>Quantity</td>
									<td>
										<b>20pks</b>
									</td>
								</tr>
								<tr>
									<td>{drug.username}(alternative)</td>
									<td>
										<b>¢20</b>
									</td>
								</tr>
							</tbody>
						</table>
					);
				})}
		</div>
	);
}
