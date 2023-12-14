import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Tabledata from "./Components/Tabledata";
import "./App.css";

const supabase = createClient(
	import.meta.env.VITE_URL,
	import.meta.env.VITE_API_KEY
);

function App() {
	const [rows, setrows] = useState();

	useEffect(() => {
		getRows();
	}, []);

	async function getRows() {
		const { data, error } = await supabase.from("transactions").select();
		setrows(data);
		console.log(error);
	}
	if (!rows) return <div>Loading...</div>;
	return (
		<div className="App">
			<div>
				<Tabledata data={rows} />
			</div>
		</div>
	);
}

export default App;
