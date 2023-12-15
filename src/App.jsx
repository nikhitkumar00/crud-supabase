import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Tabledata from "./Components/Tabledata";
import "./App.css";
import { Button, Divider, Input, Option, Select } from "@mui/joy";

const supabase = createClient(
	import.meta.env.VITE_URL,
	import.meta.env.VITE_SERVICE
);

function App() {
	const [rows, setrows] = useState();
	const [columnName, setColumnName] = useState("");
	const [columnType, setColumnType] = useState("");

	useEffect(() => {
		getRows();
	}, []);

	const handleColumnNameChange = (e) => {
		setColumnName(e.target.value);
	};

	const handleColumnTypeChange = (e) => {
		setColumnType(e.target.value);
	};

	const handleAddColumn = async () => {
		const { data, error } = await supabase.rpc(
			"add_column_to_transactions_func",
			{ column_name: "middle", column_type: "integer" }
		);
		console.log(data);
		if (error) {
			console.error("Error calling function:", error);
			return;
		}

		console.log("Function called successfully");
	};

	async function getRows() {
		const { data, error } = await supabase.from("transactions").select();
		setrows(data);
		console.log(error);
	}
	if (!rows) return <div>Loading...</div>;
	return (
		<div className="App">
			<div
				style={{
					gap: "10px",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Input
					placeholder="Column Name"
					value={columnName}
					onChange={handleColumnNameChange}
				/>
				<Select
					placeholder="Data Type"
					variant="plain"
					onChange={handleColumnTypeChange}
				>
					<Option value="integer">Integer</Option>
					<Option value="varchar">String</Option>
				</Select>

				<Button color="neutral" onClick={handleAddColumn}>
					Add Column
				</Button>
			</div>
			<Divider orientation="vertical" />
			<Tabledata data={rows} />
		</div>
	);
}

export default App;
