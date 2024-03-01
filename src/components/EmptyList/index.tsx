import { EmptyListContainer } from "./styles";

import clipboard from "../../assets/clipboard.svg";

export function EmptyList() {
  return (
    <EmptyListContainer>
      <img src={clipboard} alt="" />

      <div>
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </EmptyListContainer>
  );
}