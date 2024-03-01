import { HeaderContainer } from "./styles";

import logoTodo from "../../assets/logo_todo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <h1>
        <img src={logoTodo} alt="" />
      </h1>
    </HeaderContainer>
  );
}