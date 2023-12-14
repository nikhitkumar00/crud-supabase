import Table from "@mui/joy/Table";
import "./Tabledata.css";

export default function Tabledata({ data }) {
	return (
		<Table
			className="container"
			borderAxis="y"
			color="neutral"
			size="lg"
			stickyHeader
			variant="outlined"
			hoverRow
		>
			<thead>
				<tr>
					<th>ID</th>
					<th>Created At</th>
					<th>Name of Borrower</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{data.map((row) => (
					<tr key={row.id}>
						<td>{row.id}</td>
						<td>{row.created_at}</td>
						<td>{row.name_of_borrower}</td>
						<td>{row.amount}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
