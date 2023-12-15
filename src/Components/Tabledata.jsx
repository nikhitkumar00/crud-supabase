import Table from "@mui/joy/Table";
import "./Tabledata.css";

export default function Tabledata({ data }) {
	const columns = Object.keys(data[0]);

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
					{columns.map((column) => (
						<th key={column}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((row, index) => (
					<tr key={index}>
						{columns.map((column) => (
							<td key={column}>{row[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
	);
}
