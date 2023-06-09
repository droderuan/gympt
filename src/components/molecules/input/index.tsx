export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  description?: string;
  type: "weight" | "age" | "height";
}

const Input: React.FC<InputProps> = ({
  label,
  description,
  placeholder,
  type,
  onChange,
  ...props
}) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (type === "age") {
      if (isValidAge(value)) {
        onChange && onChange(e);
      }
    } else if (type === "height") {
      if (isValidHeight(value)) {
        onChange && onChange(e);
      }
    } else if (type === "weight") {
      if (isValidWeight(value)) {
        onChange && onChange(e);
      }
    }
  };

  const isValidAge = (value: string) => {
    if (value === "") return true;
    const isNumber = value.match(/[0-9]/g);
    if (isNumber) {
      const age = Number(value);
      if (age > 0 && age < 150) {
        return true;
      }
    }
    return false;
  };

  const isValidHeight = (value: string) => {
    if (value === "") return true;
    const isNumber = value.match(/[0-9]/g);
    if (isNumber) {
      const height = Number(value);
      if (height > 0 && height < 260) {
        return true;
      }
    }
    return false;
  };

  const isValidWeight = (value: string) => {
    if (value === "") return true;
    const isWeight = value.match(/^[0-9]{0,3}[,.]{0,1}[0-9]{0,2}$/);
    if (isWeight) {
      const number = Number(value.replace(",", "."));
      if (number > 0 && number < 600) {
        return true;
      }
    }
    return false;
  };
  return (
    <div className="mb-4 w-full">
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
        {label}
      </label>
      <input
        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        placeholder={placeholder}
        onChange={handleOnChange}
        {...props}
      />
      {description && (
        <p className="text-xs italic text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default Input;
