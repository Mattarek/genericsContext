interface WithId {
	id: number;
}

export const findById = <T extends WithId>(
	items: T[],
	id: number
): T | undefined => {
	return items.find((item) => item.id === id);
};

interface User {
	id: number;
	name: string;
}

const users: User[] = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Bob" }
];
