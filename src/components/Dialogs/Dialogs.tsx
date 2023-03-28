import React, { ChangeEvent } from "react";
import { AddMessageActionCreator } from "../../redux/dialog-reducer";
import s from "./Dialogs.module.css";
import { DialogsItem } from "./Dialogsitem/DialogsItem";
import { Message } from "./Dialogsitem/Messages/Message";
import { updateNewMessageTextActionCreator } from './../../redux/dialog-reducer';
import { DialogsPageType } from "../../redux/store";


type PropsType = {
  state: DialogsPageType;
  dispatch:(action?:any)=>void
};

export const Dialogs: React.FC<PropsType> = ({ state,dispatch,...otherProps }) => {
  let dialogsElements = state.dialogs.map((el, index) => (
    <DialogsItem key={index} id={el.id} name={el.name} />
  ));

  let messagesElements = state.messages.map((el, index) => (
    <Message key={index} id={el.id} message={el.message} />
  ));

  const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) =>{
   let newMessageText =  e.currentTarget.value
   let action = updateNewMessageTextActionCreator(newMessageText)
   dispatch(action)
  }
let newMessage = state.newMessageText
  const addMessage = () =>{
    dispatch(AddMessageActionCreator())
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>{messagesElements}
      <div className={s.btn}>
        <textarea value={newMessage} onChange={onChangeHandler} ></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
     
      </div>

    </div>
  );
};
