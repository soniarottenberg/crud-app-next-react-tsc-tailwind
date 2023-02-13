import ArrowIcon from "public/arrowRight.svg";
import Image from "next/image";
import { ArrowProps } from "tsc/interfaces";

const Arrow = ({ arrowDirection }: ArrowProps) => {
  return (
    <div className="flex items-center justify-between p-2 bg-eastern-spice rounded-full h-8 w-8 cursor-pointer">
      <Image
        src={ArrowIcon}
        alt={arrowDirection === "left" ? "arrow-left" : "arrow-right"}
        className={`${arrowDirection === "left" ? "rotate-180" : ""}`}
      />
    </div>
  );
};

export default Arrow;
