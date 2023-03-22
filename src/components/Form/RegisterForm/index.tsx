import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { IRegisterValues } from "../../../providers/UserContexts/@types";
import { UserContexts } from "../../../providers/UserContexts/UserContexts";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email(),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "Senha deve ter pelo menos 6 caractéres"),
  confirmPass: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Confirme sua senha"),
});

const RegisterForm = () => {
  const { registerRequest } = useContext(UserContexts);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterValues>({ resolver: yupResolver(schema) });

  const submit = (data: IRegisterValues) => {
    registerRequest(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        type="text"
        register={register("name")}
        error={errors.name?.message}
      />
      <Input
        label="E-mail"
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Repita a senha"
        type="password"
        register={register("confirmPass")}
        error={errors.confirmPass?.message}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
