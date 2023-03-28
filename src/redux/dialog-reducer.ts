import React from "react";
import { DialogsPageType, MessageType } from "./store";

let initialState = {
  dialogs: [
    { id: 1, name: "Osman" },
    { id: 2, name: "Diana" },
    { id: 1, name: "Maxim" },
    { id: 2, name: "Sofia" },
  ],
  messages: [
    { id: 1, message: "hi" },
    { id: 2, message: "kk" },
    { id: 3, message: "you" },
  ],
  newMessageText: "",
};

export const DialogReducer = (
  state: DialogsPageType = initialState,
  action: TsarType
): DialogsPageType => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      let body = state.newMessageText;
      let newMessage: MessageType = {
        id: new Date().getTime(),
        message: body,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    }
    case "UPDATE-NEW-MESSAGE-TEXT": {
      state.newMessageText = action.payload.newMessageText;
      return state;
    }
    default:
      return state;
  }
};

type TsarType = AddMessageACType | UpdateMessageACType;

type AddMessageACType = ReturnType<typeof AddMessageActionCreator>;

export const AddMessageActionCreator = () => {
  return {
    type: "ADD-MESSAGE",
  } as const;
};

type UpdateMessageACType = ReturnType<typeof updateNewMessageTextActionCreator>;

export const updateNewMessageTextActionCreator = (newMessageText: string) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    payload: { newMessageText },
  } as const;
};
