import { ReactNode } from "react";

type Props = {
  id: string;
  label: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
  maxLength?: number;
  currentLength?: number;
};

const FieldGroup = ({
  error,
  label,
  required,
  maxLength,
  currentLength,
  children,
  id,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="block mb-2 text-xl text-left font-medium text-gray-900 font-notoSansJp dark:text-white">
        {label}
        {required && <sup className="text-red-500"> *</sup>}
      </label>
      <div className="flex flex-row">
        <div className="flex-1">{children}</div>
      </div>
      {error && <p className="text-sm text-left text-red-500">{error}</p>}
      {maxLength && (
        <p className="text-right text-sm text-gray-500">
          {currentLength || 0}/{maxLength}
        </p>
      )}
    </div>
  );
}

export default FieldGroup;