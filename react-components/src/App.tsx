import React from 'react'

import './assets/styles/style.scss'
import { MyButton } from './common/components/button/MyButton'
import { MyInput } from './common/components/input/MyInput'

function App() {
   return (
      <div className="App">
         <div className="wrapper">
            <div className="components">
               <MyInput />
               <MyButton styles={{ width: 'max-content' }}>Add</MyButton>
               <MyButton>Add1</MyButton>
            </div>
         </div>
      </div>
   )
}

export default App
