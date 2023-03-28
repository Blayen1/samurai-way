import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/NavBar/Navbar";
import { Header } from "./components/Header/Header";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RootStateType,  } from "./redux/store";
import { StoreType } from "./redux/store";
type PropsType = {
  store: StoreType
};


export const App: React.FC<PropsType> = ( {store}) => {
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
              element={<Profile store={store}  />}
            />
            {/* <Route
              path="/dialogs/*"
              element={<Dialogs state={state} dispatch={dispatch}/>}
            /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
