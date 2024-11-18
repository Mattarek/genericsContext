import { useEffect, useState } from "react";

type UseFetchState<T> = {
	data: T | null;
	isLoading: boolean;
	error?: string;
};

export const useFetch = <T>(url: string): UseFetchState<T> => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const jsonData: T = await response.json();
				setData(jsonData);
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
