// import User from "../types/User";

const UserCard = ({ user }: { user: any }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 max-w-[600px] mx-auto space-y-2 my-5">
      <span>
        {user.id} - {user.firstName} {user.lastName}
      </span>
    </div>
  );
};

export default UserCard;
