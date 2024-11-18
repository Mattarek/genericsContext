import { useState } from "react";

export function useForm<T>(initialState: T) {
	const [formState, setFormState] = useState<T>(initialState);

	const updateField = <K extends keyof T>(field: K, value: T[K]) => {
		setFormState((p) => ({ ...p, [field]: value }));
	};
	return { formState, updateField };
}
