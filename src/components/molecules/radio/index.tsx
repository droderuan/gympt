export interface RadioProps {
  label: string;
  values: string[];
  description?: string;
  onChange: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({ label, description, values }) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor="inline-radio"
        className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
      >
        {label}
      </label>
      <div className="flex">
        {values.map((value) => (
          <div key={value} className="mr-4 flex items-center">
            <input
              id="inline-radio"
              type="radio"
              value={value}
              name="inline-radio-group"
              className="h-4 w-4 border-gray-300 bg-gray-100"
            />
            <label
              htmlFor="inline-radio"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              {value}
            </label>
          </div>
        ))}
      </div>
      {description && (
        <p className="text-xs italic text-gray-600">{description}</p>
      )}
    </div>
  );
};

export default Radio;
