import { TextInputProps } from "tsc/interfaces";

const TextInput = ({
  type,
  placeholder,
  title,
  name,
  value,
  onChange,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <div className="text-sm leading-5 font-semibold mb-2 text-heavy-grey">
        {title}
      </div>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 w-full font-light text-sm placeholder:font-light placeholder:text-sm placeholder:text-heavy-grey border-mid-grey p-1 px-3 border-2 rounded-small outline-none"
      />
    </div>
  );
};

export default TextInput;
