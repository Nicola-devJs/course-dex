import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Context } from './context'

import { FirstStep } from './components/FirstStep'
import { SecondStep } from './components/SecondStep'
import { StepIndicator } from './components/StepsIndicator'
import { ThirdStep } from './components/ThirdStep'

//Создать компонент stepsIndicator
//Добавить формы с переходом по шагам

export interface IStateFrom {
   firstStep: {
      from: string
      where: string
   }
   secondStep: {
      departure: string
      return: string
   }
   thirdStep: {
      tickets: number
      customCheckbox: boolean
      select: string
      confirm: boolean
   }
}

export const Aviasales: FC = () => {
   const [selectStep, setSelectStep] = useState(1)
   const [stateForm, setStateForm] = useState<IStateFrom>({
      firstStep: { from: '', where: '' },
      secondStep: { departure: '', return: '' },
      thirdStep: {
         tickets: 0,
         customCheckbox: false,
         select: 'lower',
         confirm: false,
      },
   })

   const currentContent = () => {
      switch (selectStep) {
         case 1:
            return <FirstStep changeStep={setSelectStep} />
         case 2:
            return <SecondStep changeStep={setSelectStep} />
         case 3:
            return <ThirdStep changeStep={setSelectStep} />
         default:
            return ''
      }
   }

   return (
      <Context.Provider value={{ stateForm, setStateForm }}>
         <Container>
            <StepIndicator
               currentStep={selectStep}
               changeStep={setSelectStep}
            />
            {currentContent()}
         </Container>
      </Context.Provider>
   )
}

const Container = styled.div`
   max-width: 840px;
   margin: 0 auto;
   padding: 0 20px;
`
