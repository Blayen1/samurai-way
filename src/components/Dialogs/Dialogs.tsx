import React from 'react'
import s from './Dialogs.module.css'

export  const  Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          <div className={s.dialog}>
              Osman
          </div>
          <div className={s.dialog}>
            Diana   
          </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>hi</div>
        <div className={s.message}>ya</div>
        <div className={s.message}>no</div>
     </div>
    </div>
  )
}
