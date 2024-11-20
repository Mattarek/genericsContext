import { useState } from "react";

export const useLocalStorage = <T>(
	key: string,
	initialValue: T
): [T, (value: T) => void] => {
	const [storedValue, setStoredValue] = useState<T>(initialValue);

	const setValue = (value: T) => {
		setStoredValue(value);
		localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};
