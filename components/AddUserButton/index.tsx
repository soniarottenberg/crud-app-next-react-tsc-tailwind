import Square from "commons/Square";
import Plus from "../../public/plus.png";
import { AddUserButtonProps } from "tsc/interfaces";

const AddUserButton = ({ handleAddUser }: AddUserButtonProps) => {
  return (
    <div
      className="flex rounded bg-white p-2 items-center justify-between drop-shadow-sm cursor-pointer w-2/4 text-medium sm:w-fit mb-4 sm:m-0"
      onClick={() => handleAddUser()}
    >
      <div className="mr-4">
        <Square
          size={"small"}
          alt={"plus-icon"}
          icon={Plus}
          isActive={true}
          handleClick={() => handleAddUser()}
        />
      </div>
      add new user
    </div>
  );
};

export default AddUserButton;
