"use client";

import { useContext } from "react";

import styles from "./page.module.css";
import ToDoItemView from "@/components/ToDoItem";
import { ToToListContext } from "@/context/context";
import { ToDoItem } from "@/models/ToDoItem";

// const todoList = [
//   {
//     id: "t1",
//     title: "Clean workspace",
//     description: "Clean it at office after 1 pm.",
//   },
//   {
//     id: "t2",
//     title: "Read book",
//     description: "read book about Adventures of Tom",
//   },
// ];

export default function Home() {
  const { state, dispatch } = useContext(ToToListContext);

  const { toDoList } = state;

  const deleteItemHandler = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", data: id });
  };

  const isEmpty = toDoList.length === 0;
  return (
    <div className={styles.itemsContainer}>
      {isEmpty && <p>To Do item list is empty</p>}
      <ul>
        {toDoList.map((item) => (
          <ToDoItemView
            key={item.id}
            item={item}
            onClickDeleteItem={() => deleteItemHandler(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}
