import Arrow from "../../commons/Arrow";
import { handleUserRole } from "utils/userRole";
import { UserCardProps } from "tsc/interfaces";

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="mb-4 w-full flex items-center justify-between bg-white drop-shadow-sm hover:drop-shadow-xl hover:cursor-pointer hover:-translate-y-0.5 rounded p-4 px-6">
      <div>
        <div className="text-xl">{`${user.first_name} ${user.last_name}`}</div>
        <div className="text-sm text-grey">{handleUserRole(user.role)}</div>
      </div>
      <Arrow arrowDirection={"right"} />
    </div>
  );
};

export default UserCard;
