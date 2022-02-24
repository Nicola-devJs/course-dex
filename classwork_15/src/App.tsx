import React, { FC } from 'react'
import './styles.css'
import { Aviasales } from './pages/aviasales/Aviasales'

export const App: FC = () => {
   return (
      <div className="App">
         <div>
            <h1>Авиасейлс курильщика</h1>
         </div>
         <div className="forms">
            <Aviasales />
         </div>
      </div>
   )
}
