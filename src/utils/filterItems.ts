// export const filterItems = <T>(
// 	items: T[],
// 	callback: (item: T) => boolean
// ): T[] => {
// 	return items.filter(callback);
// };

export const filterItems = <T>(
	items: T[],
	callback: (item: T) => boolean
): T[] => {
	return items.filter(callback);
};
