import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Navbar } from "./components/NavBar/Navbar";
import { Header } from "./components/Header/Header";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const postData = [
  { id: 1, message: "Hi,how are you?", likesCount: 15 },
  { id: 2, message: "ya", likesCount: 20 },
  { id: 3, message: "you", likesCount: 30 },
];


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={() => <Profile postData={postData} />} />
            <Route path="/dialogs/*" element={() => <Dialogs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
