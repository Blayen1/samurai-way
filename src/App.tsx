import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/NavBar/Navbar";
import { Header } from "./components/Header/Header";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootStateType } from "./redux/state";
type PropsType = {
  state: RootStateType;
  dispatch:(action:any) => void
};


export const App: React.FC<PropsType> = ({ state,dispatch,...restProps}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Navigate to={'/profile'}/>}/>
            <Route
              path="/profile"
              element={<Profile state={state.profilePage} dispatch={dispatch} />}
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs state={state.dialogsPage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
