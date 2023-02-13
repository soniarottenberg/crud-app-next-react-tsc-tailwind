import { useCallback, useEffect, useState } from "react";
import Title from "commons/Title";
import UserCard from "components/UserCard";
import SearchBar from "components/SearchBar";
import AddUserButton from "components/AddUserButton";
import { UserCardContainerProps } from "tsc/interfaces";
import { User } from "tsc/types";

const UserCardContainer = ({
  users,
  handleAddUser,
}: UserCardContainerProps) => {
  const [filter, setFilter] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const filterUsers = useCallback((data: string) => {
    setFilter(data);
  }, []);

  useEffect(() => {
    if (filter !== "") {
      setFilteredUsers(
        users.filter(
          (user: User) =>
            user.first_name.startsWith(filter) ||
            user.last_name.startsWith(filter) === true
        )
      );
    } else {
      setFilteredUsers(users);
    }
  }, [filter]);

  return (
    <div className="overflow-auto w-full pt-12 px-6 sm:px-32">
      <Title title={"Our users"} />
      <div className="flex flex-col-reverse sm:flex-row py-8 items-end sm:justify-between">
        <SearchBar filterUsers={filterUsers} />
        <AddUserButton handleAddUser={handleAddUser} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserCardContainer;
