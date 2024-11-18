import { useEffect } from "react";
import { Table } from "./components/Table";
import { useFetch } from "./hooks/useFetch";
import { useForm } from "./hooks/useForm";
import { useTheme } from "./hooks/useTheme";
import { filterItems } from "./utils/filterItems";
import { foo } from "./utils/foo";
// import './App.css'

interface FormData {
	name: string;
	age: number;
}

interface User {
	id: number;
	name: string;
	email: string;
}

function App() {
	const theme = useTheme();
	const { formState, updateField } = useForm<FormData>({
		name: "",
		age: 0
	});

	const users: User[] = [
		{ id: 1, name: "Alice", email: "alice@example.com" },
		{ id: 2, name: "Bob", email: "bob@example.com" }
	];

	const numbers = [1, 2, 3, 4, 5, 6];
	const strings = ["apple", "orange", "cherry", "blueberry"];

	const filteredNumbers = filterItems(numbers, (num) => num < 2);
	const filteredStrings = filterItems(strings, (str) => str.startsWith("b"));

	// console.log(filteredNumbers);
	// console.log(filteredStrings);

	// const user = findById(users, 2);
	// console.log(user);

	console.log(foo(1000));
	console.log(foo("1000"));

	interface DataFromAPI {
		phone: string;
		login: {
			username: string;
			password: string;
		};
		name: {
			first: string;
			last: string;
		};
		id: {
			value: string;
		};
	}

	const { data } = useFetch<DataFromAPI>(
		"https://randomuser.me/api?results=5"
	);

	return (
		<div>
			<div>
				{data && (
					<div>
						<ul>
							{data.map((person) => (
								<li key={person.id.value}>
									{person.login.username}
								</li>
							))}
						</ul>
						<p></p>
					</div>
				)}
			</div>
			<p>{theme.theme}</p>
			<button onClick={theme.toggleTheme}>Change color theme!</button>2
			<div>
				<input
					type="text"
					value={formState.name}
					placeholder="name"
					onChange={(e) => updateField("name", e.target.value)}
				/>
				<input
					type="text"
					value={formState.age}
					placeholder="age"
					onChange={(e) => updateField("age", Number(e.target.value))}
				/>
				<p>
					Name: {formState.name}
					<br />
					Age: {formState.age}
				</p>
			</div>
			<div>
				<h2>User Table</h2>
				<Table
					data={users}
					renderRow={(user) => (
						<>
							<td>{user.name}</td>
							<td>{user.email}</td>
						</>
					)}
				/>
			</div>
		</div>
	);
}

export default App;
