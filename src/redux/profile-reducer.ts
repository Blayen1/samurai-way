import React from "react";
import { PostType, ProfilePageType } from "./store";

let intialState = {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 15 },
      { id: 2, message: "ya", likesCount: 20 },
      { id: 3, message: "you", likesCount: 30 },
    ],
    newPostText: "",
  }


export const ProfileReducer = (
  state : ProfilePageType = intialState,
  action: TsarType
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost: PostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0,
      };
     return  {...state, posts: [newPost, ...state.posts], newPostText: ''}
    }
    case "UPDATE-NEW-POST-TEXT": {
      
      return {...state, newPostText: action.payload.newText}
    }

    default:
      return state;
  }
};

type TsarType = AddPostACType | UpdateNewMessageType;

type AddPostACType = ReturnType<typeof addPostAC>;

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};

type UpdateNewMessageType = ReturnType<typeof updateNewPostTextAC>;

export const updateNewPostTextAC = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    payload: {
      newText,
    },
  } as const;
};
