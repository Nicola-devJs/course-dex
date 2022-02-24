import { FC } from 'react'
import styled from 'styled-components'

export const InputFile: FC = () => {
   return (
      <LabelLoad>
         Докажите
         <input type="file" style={{ width: '0px' }} />
         <ButtonLoad>Загрузить фото</ButtonLoad>
      </LabelLoad>
   )
}

const LabelLoad = styled.label`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 5px;
`

const ButtonLoad = styled.div`
   color: #fff;
   background-color: #000;
   padding: 4px 8px;
   border-radius: 2px;
`
