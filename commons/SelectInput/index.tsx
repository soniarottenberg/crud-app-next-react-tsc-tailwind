import { SelectInputProps } from "tsc/interfaces";
import { handleUserRole } from "utils/userRole";

const SelectInput = ({
  title,
  name,
  value,
  placeholder,
  options,
  onChange,
}: SelectInputProps) => {
  return (
    <div className="w-full text-grey">
      <div className="text-sm leading-5 font-semibold mb-2 text-heavy-grey">
        {title}
      </div>
      <select
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="h-8 w-full font-light text-sm placeholder:font-light placeholder:text-sm placeholder:text-heavy-grey border-mid-grey p-1 px-3 border-2 rounded-small outline-none"
      >
        <option disabled={true} value={""}>
          {placeholder}
        </option>
        {(Object.keys(options) as (keyof typeof options)[]).map(
          (key, index) => {
            return (
              <option key={index} value={options[key]}>
                {handleUserRole(options[key])}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
};

export default SelectInput;
