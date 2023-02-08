import { ButtonProps } from "tsc/interfaces";

const Button = ({ label, type }: ButtonProps) => {
  return (
    <button className="bg-green rounded p-4 text-white" type={type}>
      {label}
    </button>
  );
};

export default Button;
