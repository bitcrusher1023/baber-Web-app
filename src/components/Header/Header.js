import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Notifications from "../Notifications/Notifications";

import { Container, Content, Profile } from "./styles";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  const user = useSelector(state => state.user.user);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="BarberApp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{user.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                user.avatar.url ||
                "https://api.adorable.io/avatars/60/abott@adorable.png"
              }
              alt={user.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
