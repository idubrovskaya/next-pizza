'use client'

import { useFormContext } from 'react-hook-form';
import { ClearButton, ErrorText, RequiredSymbol } from '..';
import { Input } from '../../ui';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  name,
  label,
  required,
  className,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;
  const onCLickClear = () => {
    setValue(name, '', { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <p className='font-medium mb-2'>
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className='relative'>
        <Input className='h-12 text-sm' {...register(name)} {...props} />
        {value && <ClearButton onClick={onCLickClear} />}
      </div>
      {errorText && (
        <ErrorText text='Поле обязательное для заполнения' className='mt-2' />
      )}
    </div>
  );
};
