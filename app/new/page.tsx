"use client";
import { useContext } from "react";
import { redirect } from "next/navigation";

import styles from "./page.module.css";
import { ToDoItem } from "@/models/ToDoItem";
import React, { useState } from "react";
import { ToToListContext } from "@/context/context";

export default function NewForm() {
  const { state, dispatch } = useContext(ToToListContext);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<ToDoItem>({
    id: "",
    title: "",
    description: "",
  });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      title: value,
    }));
  };

  const descriptionChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      description: value,
    }));
  };

  const createNewToDoItemHandler = (event: any) => {
    event.preventDefault();

    if (formData.title.trim().length === 0) {
      return;
    }

    if (formData.description.trim().length === 0) {
      return;
    }

    setSubmitted(true);
    dispatch({ type: "ADD_ITEM", data: formData });
  };

  return (
    <div className={styles.container}>
      {isSubmitted && <p>You successfully added to do item</p>}
      {!isSubmitted && (
        <div className={styles.formContainer}>
          <h1>New form</h1>
          <div>
            <label>Title</label>
            <input type="text" name="title" onChange={titleChangeHandler} />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={descriptionChangeHandler}
            />
          </div>
          <button className={styles.button} onClick={createNewToDoItemHandler}>
            Create To Do Item
          </button>
        </div>
      )}
    </div>
  );
}
