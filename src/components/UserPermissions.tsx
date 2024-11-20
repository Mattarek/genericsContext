import { UserRole } from "../enums/UserRole";
import { getPermissions } from "../services/permissionsService";

interface UserPermissionsProps {
	role: UserRole;
}

export const UserPermissions = ({ role }: UserPermissionsProps) => {
	const permissions = getPermissions(role);

	return (
		<div>
			<h2>Your role: {role}</h2>
			<h3>Permissions:</h3>
			<ul>
				{permissions.map((permission, index) => (
					<li key={index}>{permission}</li>
				))}
			</ul>
		</div>
	);
};
