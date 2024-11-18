const createTuple = <T, U, C>(first: T, second: U, third: C): [T, U, C] => {
	return [first, second, third];
};

const tuple = createTuple("asd", 123, "qwew");
