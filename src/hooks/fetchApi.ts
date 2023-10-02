import { useState, useEffect } from "react";
import type { Users } from "../types/users.types";

interface IUseFetch {
	data: Users[];
	loading: boolean;
}
const useFetch = (url: string): IUseFetch => {
	const [, setData] = useState<Users[]>([]);
	const [loading, ] = useState<boolean>(true);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, [url]);

	return { data, loading };
};

export default useFetch;
