import React from "react";
import s from "../../Dialogs.module.css";

type PropsType = {
  id: number;
  message: string;
};

export const Message: React.FC<PropsType> = (state) => {
  
  
  return (
    <>
      <div  className={s.message}>{state.message}</div>
    
    </>
  );
};
