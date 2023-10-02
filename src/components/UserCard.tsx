import { Users } from "../types/users.types";

const UserCard = (user: Users) => {
	const avatarUrl = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${}`;

	return (
		<div className="rounded-lg overflow-hidden h-52">
			<div className="p-5 flex items-center h-full">
				<div>
					<img
						src={avatarUrl}
						alt={`Avatar de ${user.name}`}
						className="w-16 h-16 rounded-full mr-4"
					/>
				</div>
				<div>
					<h1 className="text-white text-lg">
						{user.name}
						<span className="text-sm text-primary-200">({user.username})</span>
					</h1>
					<p className="text-primary-100 mt-2">{user.email}</p>
					<p className="text-primary-100">{user.phone}</p>
					<p className="text-primary-100">{user.website}</p>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
