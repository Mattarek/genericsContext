import { useState } from "react";

export const useArray = <T,>(initialArray: T[] = []) => {
	const [array, setArray] = useState<T[]>(initialArray);

	const push = (element: T) => setArray((arr) => [...arr, element]);
	const remove = (index: number) =>
		setArray((arr) => arr.filter((_, i) => i !== index));

	return { array, push, remove };
};
