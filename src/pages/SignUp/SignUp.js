import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.svg";

export default function SignUp() {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <>
      <img src={logo} alt="BarberApp" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          style={{ border: errors.fullname ? "1px solid red" : "none" }}
          name="fullname"
          placeholder="Nome completo"
          ref={register({
            required: "Nome completo é obrigatório"
          })}
        />
        {errors.fullname && <span>{errors.fullname.message}</span>}

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
            required: "Senha é obrigatório",
            minLength: {
              value: 6,
              message: "Senha deve conter pelo menos 6 caracteres"
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Criar conta</button>
        <Link to="/">Já possui uma conta?</Link>
      </form>
    </>
  );
}
