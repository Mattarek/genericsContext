import { useEffect, useState } from "react";

type UseFetchState<T> = {
	data: T | null;
	isLoading: boolean;
	error: string | null;
};

export const useFetch = <T>(url: string): UseFetchState<T> => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		setIsLoading(true);
		setError(null);
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data.results);
			} catch (error) {
				setError((error as Error).message);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { data, isLoading, error };
};
