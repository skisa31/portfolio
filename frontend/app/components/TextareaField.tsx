import { UseFormRegisterReturn } from 'react-hook-form';
import TextareaAutoSize, { TextareaAutosizeProps, } from "react-textarea-autosize";
import FieldGroup from "./FieldGroup";

type Props = {
  label: string;
  error: string;
  currentLength?: number;
  register: UseFormRegisterReturn;
} & TextareaAutosizeProps;

const TextareaField = ({
  error,
  label,
  currentLength,
  register,
  ...props
}: Props) => {
  return (
    <FieldGroup
      label={label}
      error={error}
      currentLength={currentLength}
      maxLength={props.maxLength}
      required={props.required}
      id={register.name}
    >
      <TextareaAutoSize
        id={register.name}
        className={`block h-36 w-full p-2.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 border border-gray-300 text-gray-900 text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={label}
        {...register}
        {...props}
      />
    </FieldGroup>
  )
}

export default TextareaField;
