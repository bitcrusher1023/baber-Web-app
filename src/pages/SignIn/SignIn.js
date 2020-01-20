import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.svg";

export default function SignIn() {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <>
      <img src={logo} alt="BarberApp" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ border: errors.email ? "1px solid red" : "none" }}
          type="email"
          name="email"
          placeholder="E-mail"
          ref={register({
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Endereço de e-mail inválido"
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          style={{ border: errors.password ? "1px solid red" : "none" }}
          type="password"
          name="password"
          placeholder="Senha"
          ref={register({
            required: "Senha é obrigatório"
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Entrar</button>

        <Link to="/register">Não possui uma conta?</Link>
      </form>
    </>
  );
}
