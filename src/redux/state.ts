
import { rerenderEntireTree } from './../render';
export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: PostType[];

};

export type DialogType = {
  id: number;
  name: string;
};

export type MessageType = {
  id: number;
  message: string;
};

export type DialogsPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
  
};

let state: RootStateType = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi,how are you?", likesCount: 15 },
      { id: 2, message: "ya", likesCount: 20 },
      { id: 3, message: "you", likesCount: 30 },
    ],
  },

  dialogsPage: {
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
  },
  sidebar: {},
};

export const addPost = (postMessage: string) => {
  debugger;
  let newPost : PostType =  { id: new Date().getTime(), message: postMessage, likesCount: 15 };
  
  state.profilePage.posts.push(newPost);
 
  rerenderEntireTree(state)
};

export default state;
