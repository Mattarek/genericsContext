import axios from "axios";
import { useEffect, useState } from "react";

type UseFetchState<T> = {
	data: T | null;
	isLoading: boolean;
	error?: string;
};

export const useAxios = <T>(url: string): UseFetchState<T> => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const response = await axios(url);
				const jsonData: T = response.data;
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
