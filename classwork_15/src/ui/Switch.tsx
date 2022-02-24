import { BaseSyntheticEvent, FC, useCallback } from 'react'
import styled, { css } from 'styled-components'

interface IProps {
   id: string
   value: boolean
   label?: string
   handelChange: (value: boolean, event: BaseSyntheticEvent) => void
}

export const Switch: FC<IProps> = ({ id, value, handelChange, label }) => {
   const changeValue = useCallback(
      (event: BaseSyntheticEvent) => {
         // Мы всегда передаем вторым параметром нативный event в коллбек
         // Это надо чтобы пользователи нашего компонента могли использовать
         // preventDefault, stopPropogation и типа того
         handelChange(!value, event)
      },
      [value, handelChange]
   )

   return (
      <Label>
         <input
            checked={value}
            onChange={changeValue}
            type="checkbox"
            id={id}
            style={{ width: '0px' }}
         />
         <Container checked={value}>
            <MarkContainer checked={value}></MarkContainer>
         </Container>
         {label}
      </Label>
   )
}

const Label = styled.label`
   font-size: 14px;
`
const Container = styled.div<{ checked: boolean }>`
   position: relative;
   width: 34px;
   height: 19px;
   border: 1px solid #999;
   border-radius: 10px;

   background-color: ${({ checked }) => (checked ? '#000' : 'transparent')};
   cursor: pointer;
`
const MarkContainer = styled.div<{ checked: boolean }>`
   position: absolute;
   top: 2px;
   width: 15px;
   height: 15px;
   border-radius: 50%;

   ${(props) =>
      props.checked
         ? css`
              right: 2px;
              background-color: #fff;
           `
         : css`
              left: 2px;
              background-color: #000;
           `}
`
