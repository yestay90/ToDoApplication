import styles from "./ToDoItem.module.css";
import { ToDoItem } from "@/models/ToDoItem";

interface Props {
  item: ToDoItem;
  onClickDeleteItem: (id: string) => void;
}

export default function ToDoItemView({ item, onClickDeleteItem }: Props) {
  const { title, description, id } = item;
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <button onClick={() => onClickDeleteItem(id)}>Delete</button>
    </div>
  );
}
