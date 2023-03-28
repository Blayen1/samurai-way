import { DialogReducer } from "./dialog-reducer";
import { ProfileReducer } from "./profile-reducer";

export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
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
  newMessageText: string;
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

export type StoreType = {
  _state: StateType
  _callSubscriber: () => void
  subscriber: (observer: () => void) => void
  subscribe: (observer: () => void) => void
  getState: () => StateType
  dispatch: (action: any) => void
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage:DialogsPageType
}

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi,how are you?", likesCount: 15 },
        { id: 2, message: "ya", likesCount: 20 },
        { id: 3, message: "you", likesCount: 30 },
      ],
      newPostText: "",
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
      newMessageText: "",
    },
    sidebar: {},
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {
    ProfileReducer(this._state.profilePage, action);
    DialogReducer(this._state.dialogsPage, action);
    this._callSubscriber()
  },
};

export default store;
