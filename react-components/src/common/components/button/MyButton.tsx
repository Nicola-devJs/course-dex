import React from 'react'
import classes from './MyButton.module.scss'

interface MyButtonProps {
   children: string
   styles?: object
}

export const MyButton: React.FC<MyButtonProps> = ({ children, styles }) => {
   console.log(children)

   return (
      <button className={classes.MyButton} style={styles}>
         {children === 'Add' ? (
            <>
               {children}
               <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M12.0002 8.66671H8.66683V12C8.66683 12.3667 8.36683 12.6667 8.00016 12.6667C7.6335 12.6667 7.3335 12.3667 7.3335 12V8.66671H4.00016C3.6335 8.66671 3.3335 8.36671 3.3335 8.00004C3.3335 7.63337 3.6335 7.33337 4.00016 7.33337H7.3335V4.00004C7.3335 3.63337 7.6335 3.33337 8.00016 3.33337C8.36683 3.33337 8.66683 3.63337 8.66683 4.00004V7.33337H12.0002C12.3668 7.33337 12.6668 7.63337 12.6668 8.00004C12.6668 8.36671 12.3668 8.66671 12.0002 8.66671Z"
                     fill="white"
                  />
               </svg>
            </>
         ) : (
            children
         )}
      </button>
   )
}
