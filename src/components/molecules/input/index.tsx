export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  description?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  description,
  placeholder,
  ...props
}) => {
  return (
    <div className="w-full px-3">
      <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
        {label}
      </label>
      <input
        className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        placeholder={placeholder}
        {...props}
      />
      {description && (
        <p className="text-xs italic text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default Input;
