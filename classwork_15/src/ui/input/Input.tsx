import React, { BaseSyntheticEvent, FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 6px;
   margin-bottom: 10px;
   & input {
      border-radius: 5px;
      padding: 5px 10px;
      border: 1px solid #ccc;
      &:focus {
         outline: none;
         box-shadow: 2px 3px 5px #ccc;
      }
      &:invalid {
         border: 1px solid red;
      }
      &:invalid ~ span {
         display: block;
      }
   }
   & span {
      display: none;
      align-self: flex-end;
      font-size: 13px;
      color: red;
   }
`

interface InputProps {
   inputType: 'text' | 'password' | 'number' | 'date'
   textError?: string
   name: string
   value?: string | number
   inputHadler?: (event: any) => void
   id: string
   label: string
   placeholder?: string
   pattern?: string
}
export const Input: FC<InputProps> = ({
   inputType,
   textError,
   value,
   name,
   inputHadler,
   id,
   label,
   placeholder,
   pattern,
}) => {
   return (
      <Container>
         <label htmlFor={id}>{label}</label>
         <input
            type={inputType}
            name={name}
            id={id}
            placeholder={placeholder}
            pattern={pattern}
            value={value}
            onChange={inputHadler}
         />
         {textError && <span>{textError}</span>}
      </Container>
   )
}
