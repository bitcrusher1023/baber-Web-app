import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import FormInput from "../../components/FormInput/FormInput";

import { Container } from "./styles";

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.user);

  const { handleSubmit, register, watch, errors } = useForm();

  const onSubmit = data => {
    // dispatch(signUpRequest(name, email, password));
    console.log(data);
  };

  return (
    <Container>
      <h1>Atualizar Perfil</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="text"
          name="name"
          placeholder="Nome completo"
          defaultValue={profile.name}
          register={register({
            required: "Nome completo é obrigatório",
            pattern: {
              value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
              message: "Nome inválido"
            }
          })}
          errors={errors["name"]}
        />

        <FormInput
          type="email"
          name="email"
          placeholder="E-mail"
          defaultValue={profile.email}
          register={register({
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Endereço de e-mail inválido"
            }
          })}
          errors={errors["email"]}
        />

        <hr />

        <FormInput
          type="password"
          name="oldPassword"
          placeholder="Senha antiga"
          register={register({
            required: "Senha antiga é obrigatório"
          })}
          errors={errors["oldPassword"]}
        />

        <FormInput
          type="password"
          name="newPassword"
          placeholder="Senha nova"
          register={register({
            required: "Senha nova é obrigatório",
            minLength: {
              value: 6,
              message: "Senha deve conter pelo menos 6 caracteres"
            }
          })}
          errors={errors["newPassword"]}
        />

        <FormInput
          type="password"
          name="confirmNewPassword"
          placeholder="Confirmação de senha nova"
          register={register({
            required: "Confirmação de senha nova é obrigatório",
            minLength: {
              value: 6,
              message: "Senha deve conter pelo menos 6 caracteres"
            },
            validate: {
              validate: value =>
                value === watch("newPassword") ||
                "Confirmacao de senha deve ser igual a senha nova"
            }
          })}
          errors={errors["confirmNewPassword"]}
        />

        <button type="submit">Atualizar perfil</button>
      </form>

      <button type="submit">Sair da aplicação</button>
    </Container>
  );
}
