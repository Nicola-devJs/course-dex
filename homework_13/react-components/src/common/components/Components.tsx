import React from 'react'

import classes from './Components.module.scss'

const Components = () => {
   const [isError, setIsError] = React.useState(true)
   return (
      <div className="components">
         {/* Input */}
         <div className={classes.MyInput}>
            <label htmlFor="idi">Login</label>
            <input id="idi" type="text" datatype={isError ? 'error' : ''} />
            {isError ? <span>Required</span> : null}
         </div>
         {/* button */}
         <button className={classes.MyButton}>Sign In</button>
         {/* func button add */}
         <a href="#" className={classes.MyFuncButton}>
            Add +
         </a>
         {/* func button Cancel */}
         <a href="#" className={classes.MyFuncButtonCancel}>
            Cancel
         </a>
         <div className={classes.MyCheckbox}>
            <input type="checkbox" id="idc" />
            <label htmlFor="idc">Text</label>
         </div>
      </div>
   )
}

export default Components
