import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import { ILoginValues } from '../../../providers/UserContexts/@types';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { UserContexts } from '../../../providers/UserContexts/UserContexts';

const schema = yup.object().shape({
  email: yup.string().required('Email obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

const LoginForm = () => {
  const { loginRequest } = useContext(UserContexts);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginValues>({
    resolver: yupResolver(schema),
  });

  const submit = (data: ILoginValues) => {
    loginRequest(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Seu e-mail...'
        register={register('email')}
        type='email'
        error={errors.email?.message}
      />
      <Input
        label='Sua senha...'
        register={register('password')}
        type='password'
        error={errors.password?.message}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
