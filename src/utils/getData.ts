interface User {
	id: string;
	email: string;
}

interface NewUser {
	email: string;
}

// const getData = <T>(url: string): T => {
// 	return {} as T;
// };

// const user = getData<User>("http://localhost:3000/api");
interface Usser {
	id: string;
	email: string;
}

interface SuccessResponse<T> {
	success: true;
	data: T;
}

interface ErorResponse {
	success: false;
	error: string;
}

type ApiResponse<T> = SuccessResponse<T> | ErorResponse;

const userResponse: ApiResponse<Usser> = {
	success: true,
	data: {
		email: "a@a.pl",
		id: "2"
	}
};
const sendData = <P, R>(url: string, data: P): R => {
	return {} as R;
};

const newUser = sendData<NewUser, User>("https://api.com/user", {
	email: " a@email.com"
});

const getData = <T>(): ApiResponse<T> => {
	const random = Math.random();

	if (random > 0.5) {
		return {
			success: true,
			data: {} as T
		};
	}

	return {
		success: false,
		error: "Can not get response!"
	};
};

const response = getData<Usser>();
