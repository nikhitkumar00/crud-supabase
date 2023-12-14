import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	import.meta.env.VITE_URL,
	import.meta.env.VITE_API_KEY
);

function App() {
	const [rows, setrows] = useState(null);

	useEffect(() => {
		getRows();
	}, []);

	async function getRows() {
		const { data, error } = await supabase.from("transactions").select();
		setrows(data);
		console.log(data);
		console.log(error);
	}

	return (
		<div>{rows === null ? <p>Loading...</p> : <div>DATA FOUND</div>}</div>
	);
}

export default App;
