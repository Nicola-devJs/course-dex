import React, { FC } from 'react'
import styled, { css } from 'styled-components'

//Сделать три кнопки, с индикацией выбранного шага в данный момент,
//Добавить колбэки для перехода по шагам по клику

interface IProps {
   currentStep: number
   changeStep: (step: number) => void
}

export const StepIndicator: FC<IProps> = ({ currentStep, changeStep }) => {
   return (
      <ContainerIndicators>
         <StepButton selected={currentStep === 1} onClick={() => changeStep(1)}>
            Куда
         </StepButton>

         <StepButton selected={currentStep === 2} onClick={() => changeStep(2)}>
            Когда
         </StepButton>

         <StepButton selected={currentStep === 3} onClick={() => changeStep(3)}>
            Как
         </StepButton>
      </ContainerIndicators>
   )
}

const StepButton = styled.button<{ selected: boolean }>`
   ${(props) =>
      props.selected
         ? css`
              background: #000;
              color: #fff;
              border: none;
           `
         : css`
              background: #fff;
              color: #000;
              border: 1px solid #000;
           `}

   padding: 10px 5px;
   border-radius: 50%;
   font-size: 16px;
   width: 100px;
   cursor: pointer;
`
const ContainerIndicators = styled.div`
   display: flex;
   align-items: center;

   & > *:not(last-child) {
      margin-right: 20px;
   }
`
