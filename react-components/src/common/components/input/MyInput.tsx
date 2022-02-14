import React from 'react'
import classes from './MyInput.module.scss'

export const MyInput = () => {
   return (
      <div className={classes.MyInput}>
         <label htmlFor="idi">Login</label>
         <input id="idi" type="text" />
         <span>Required</span>
      </div>
   )
}
