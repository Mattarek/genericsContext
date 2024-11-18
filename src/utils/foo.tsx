export const foo = <T,>(param: T): T => {
	return param;
};

console.log(foo(100));
console.log(foo("100"));
