import React from "react";
import s from "./Dialogs.module.css";
import { DialogsItem } from "./Dialogsitem/DialogsItem";
import { Message } from "./Dialogsitem/Messages/Message";

export const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Osman" },
    { id: 2, name: "Diana" },
  ];

  const messagesData = [
    { id: 1, message: "hi" },
    { id: 2, message: "kk" },
    { id: 3, message: "you" },
  ];

  let dialogsElements = dialogs.map((el) => (
    <DialogsItem name={el.name} id={el.id} />
  ));

  let messagesElements = messagesData.map((el) => (
    <Message message={el.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
