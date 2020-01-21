import React from "react";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="BarberApp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Daniel Ferreira</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/60/abott@adorable.png"
              alt="Daniel"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
