interface User {
	id?: string;
	email: string;
	name: string;
	lastname: string;
}

// All optional parameters
type UserPartial = Partial<User>;

// All required
type UserRequired = Required<User>;

// Omit - pomin
type UserOmit = Omit<User, "id">;

// Readonly
type UserReadonly = Readonly<User>;
// {
//     readonly id?: string | undefined;
//     readonly email: string;
//     readonly name: string;
//     readonly lastname: string;
// }


type UserRecord = Record<"code" | "volume", User>;
// {
//      code: User;
// 	    volume: User;
// }


type UserPick = Pick<User, "name" | "lastname">;


// Tworzymy nowy typ o budowaie User, bez "name" i "lastname"
type UserExclude = Exclude<User, "name" | "lastname">;

// Część wspólna
type UserExtract = Extract<"React" | "VUE" | "Angular", "React" | "Angular">;


// UserKeyof = "id" | "email" | "name" | "lastname"
type UserKeyof = keyof User;
