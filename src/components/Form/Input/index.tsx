import { InputHTMLAttributes } from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register?: UseFormRegisterReturn;
  error?: string;
  type: 'text' | 'password' | 'email';
}

const Input = ({ label, register, type, error }: IInputProps) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    <StyledParagraph fontColor='red'>{error}</StyledParagraph>
  </fieldset>
);

export default Input;
