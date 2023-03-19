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
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

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
    if (action.type === "ADD-POST") {
      let newPost: PostType = {
        id: new Date().getTime(),
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    }
  },
};

export default store;
