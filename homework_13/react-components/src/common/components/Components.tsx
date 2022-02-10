import React from 'react'

import classes from './Components.module.scss'

const Components = () => {
   return (
      <>
         <div className={classes.MyInput}>
            <label htmlFor="">Login</label>
            <input type="text" />
         </div>
      </>
   )
}

export default Components
