import { useEffect, useState } from "react";

type UseFetchState<T> = {
	data: T[];
	isLoading: boolean;
	error?: string;
};

export const useFetch = <T>(url: string): UseFetchState<T> => {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const { results }: { results: T[] } = await response.json();
				setData(results);
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
