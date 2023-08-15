import { useParams } from "react-router-dom";

export default function ResultDetails() {
	const { drugId } = useParams();
	console.log(drugId);

	return <div className="detail-container">{drugId}</div>;
}
