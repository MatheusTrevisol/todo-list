import { ItemListContainer } from "./styles";

import { RiDeleteBin6Line } from "react-icons/ri";

interface ListItem {
  id: number;
  description: string;
  isChecked: boolean;
}

interface ItemListProps {
  list: ListItem[];
  toggleTaskChecked: ({id, value}: {id: number, value: boolean}) => void;
  handleRemoveTask: (id:number) => void;
}

export function ItemList({ list, toggleTaskChecked, handleRemoveTask }: ItemListProps) {
  return (
    <ItemListContainer>
      {
        list.map((item) => {
          return (
            <div key={String(item.id)} className="wrapper">
              <input 
                type="checkbox" 
                id={String(item.id)}
                name="task" 
                onClick={() => toggleTaskChecked({ id: item.id, value: !item.isChecked })} 
              />
              <label htmlFor={`task${item.id}`} >
                {item.description}
              </label>
              <button type="button" onClick={() => handleRemoveTask(item.id)}> 
                <RiDeleteBin6Line size={22} />
              </button>
            </div>
          )
        })
      }
    </ItemListContainer>
  );
}