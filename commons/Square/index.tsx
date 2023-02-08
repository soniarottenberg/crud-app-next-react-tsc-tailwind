import Image from "next/image";
import { SquareProps } from "tsc/interfaces";

const Square = ({ icon, alt, size, isActive, handleClick }: SquareProps) => {
  return (
    <button
      className={`${isActive ? "bg-deep-blue" : "bg-light-grey"} ${
        size === "small" ? "h-8 w-8" : "h-12 w-12"
      } rounded flex justify-center items-center hover:bg-deep-blue sm:mt-auto`}
      onClick={() => handleClick()}
    >
      {icon && <Image src={icon} alt={alt} />}
    </button>
  );
};

export default Square;
