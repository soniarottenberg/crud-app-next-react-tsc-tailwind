import Image from "next/image";
import { SearchBarProps } from "tsc/interfaces";
import Glass from "../../public/glass.svg";

const SearchBar = ({ filterUsers }: SearchBarProps) => {
  return (
    <div className="bg-white p-2 px-4 rounded flex w-full sm:w-72">
      <Image src={Glass} alt="glass" className="mr-2" />
      <input
        type="search"
        className="text-medium text-black placeholder:text-black border-none outline-none w-72"
        placeholder="Search for a user"
        onChange={(e) => filterUsers(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
