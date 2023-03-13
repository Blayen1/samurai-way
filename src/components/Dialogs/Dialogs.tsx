import React from "react";
import { DialogsPageType } from "../../redux/state";
import s from "./Dialogs.module.css";
import { DialogsItem } from "./Dialogsitem/DialogsItem";
import { Message } from "./Dialogsitem/Messages/Message";

type PropsType = {
  state: DialogsPageType;
};

export const Dialogs: React.FC<PropsType> = ({ state }) => {
  let dialogsElements = state.dialogs.map((el, index) => (
    <DialogsItem key={index} id={el.id} name={el.name} />
  ));

  let messagesElements = state.messages.map((el, index) => (
    <Message key={index} id={el.id} message={el.message} />
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
