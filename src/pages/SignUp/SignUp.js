import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="BarberApp" />

      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possui uma conta?</Link>
      </form>
    </>
  );
}
