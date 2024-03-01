import { HomeContainer, Content, InputDiv, InputAddTask, ButtonAddTask, ListDiv, HeaderList } from "./styles";

import { useState } from "react";

import { EmptyList } from "../../components/EmptyList";
import { ItemList } from "../../components/ItemList";

import { GoPlusCircle } from "react-icons/go";

interface TaskToList {
  id: number,
  description: string,
  isChecked: boolean,
}

export function Home() {
  const [ tasks, setTasks ] = useState<TaskToList[]>([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ finishedTasks, setFinishedTasks ] = useState(0);

  function handleAddTaskToList() {
    if(!inputValue) {
      return
    }

    const newTask: TaskToList = {
      id: new Date().getTime(),
      description: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  function toggleTaskChecked({ id, value }: {id: number; value: boolean }) {
    const labelElement = document.querySelector(`[for=task${id}]`);

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if(value === true) {
          labelElement?.classList.add('strikethrough-label');
          setFinishedTasks(prev => prev + 1)
        } else {
          labelElement?.classList.remove('strikethrough-label');
          setFinishedTasks(prev => prev - 1)
        }
        return { ...task, isChecked: value }
      }

      return { ...task }
    }) 

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
   const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  return (
    <HomeContainer>
      <Content>
        <InputDiv>
          <label htmlFor="task" />
          <InputAddTask 
            id="task" 
            name="task"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <ButtonAddTask type="button" onClick={handleAddTaskToList}>
            Criar
            <GoPlusCircle size={16} />
          </ButtonAddTask>
        </InputDiv>

        <ListDiv>
          <HeaderList>
            <div className="createdTasks">
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>

            <div className="finishedTasks">
              <p>Concluídas</p>
              <span>{finishedTasks}</span>
            </div>
          </HeaderList>

          {
            tasks.length > 0
            ? <ItemList 
                list={tasks} 
                toggleTaskChecked={toggleTaskChecked} 
                handleRemoveTask={handleRemoveTask}
              /> /** if contains tasks */
            : <EmptyList /> /** if doesn't */
          }
        </ListDiv>
      </Content>
    </HomeContainer>
  );
};