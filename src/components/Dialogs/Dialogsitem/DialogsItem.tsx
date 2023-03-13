import React from "react";
import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  id: number;
  name: string;
};

export const DialogsItem: React.FC<PropsType> = (state) => {
  let path = "/dialogs/" + state.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{state.name}</NavLink>
    </div>
  );
};
