import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { signInRequest } from "../../redux/auth/authActions";
import FormInput from "../../components/FormInput/FormInput";

import logo from "../../assets/images/logo.svg";

export default function SignIn() {
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="BarberApp" />
      <h1>BarberApp</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type="email"
          name="email"
          placeholder="E-mail"
          register={register({
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Endereço de e-mail inválido"
            }
          })}
          errors={errors["email"]}
        />

        <FormInput
          type="password"
          name="password"
          placeholder="Senha"
          register={register({
            required: "Senha é obrigatório"
          })}
          errors={errors["password"]}
        />

        <button type="submit">Entrar</button>

        <Link to="/register">Não possui uma conta?</Link>
      </form>
    </>
  );
}
