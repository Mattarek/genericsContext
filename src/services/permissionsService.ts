import { UserRole } from "../enums/UserRole";

export const getPermissions = (role: UserRole): string[] => {
	switch (role) {
		case UserRole.ADMIN:
			return ["edit", "delete", "view"];
		case UserRole.EDITOR:
			return ["edit", "view"];
		case UserRole.VIEWER:
			return ["view"];
		default:
			throw new Error("Invalid user role");
	}
};
