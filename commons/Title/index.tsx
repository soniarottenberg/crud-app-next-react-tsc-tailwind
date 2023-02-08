import { TitleProps } from "tsc/interfaces";

const Title = ({ title }: TitleProps) => {
  return (
    <h1 className="text-xl font-bold drop-shadow-[4px_4px_4px_rgba(0,0,0,0.4)]">
      {title}
    </h1>
  );
};

export default Title;
