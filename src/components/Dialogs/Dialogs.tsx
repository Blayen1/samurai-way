import React from 'react'
import s from './Dialogs.module.css'
import { DialogsItem } from './Dialogsitem/DialogsItem'
import { Message } from './Dialogsitem/Messages/Message'

export  const  Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
          <div className={s.dialog}>
              <DialogsItem name={'Osman'} id={1} />
          </div>
          <div className={s.dialog}>
              <DialogsItem name={'Diana'} id={2}/>
          </div>
      </div>
      <div className={s.messages}>
        <Message message='hi' />
        <Message message='kk' />
        <Message message='you' />
     </div>
    </div>
  )
}
