import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const result = await axios(url);
				setData(result.data);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
