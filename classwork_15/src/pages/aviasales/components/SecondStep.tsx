import { BaseSyntheticEvent, FC, useContext } from 'react'
import styled from 'styled-components'
import { Input } from '../../../ui/input/Input'
import { Context } from '../context'
import { IStateFrom } from '../Aviasales'
//Реализовать форму второго шага
//Сделать контейнер для кнопочек

interface IProps {
   changeStep: (step: number) => void
}

export const SecondStep: FC<IProps> = ({ changeStep }) => {
   const { stateForm, setStateForm } = useContext(Context)

   const submitHandler = (event: BaseSyntheticEvent<SubmitEvent>) => {
      event.preventDefault()

      changeStep(3)
   }

   const handlerInputDeparture = (event: BaseSyntheticEvent<InputEvent>) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         secondStep: {
            ...state.secondStep,
            departure: event.target.value,
         },
      }))
   }

   const handlerInputReturn = (event: BaseSyntheticEvent<InputEvent>) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         secondStep: {
            ...state.secondStep,
            return: event.target.value,
         },
      }))
   }

   return (
      <ContainerForm action="#" onSubmit={submitHandler}>
         <Input
            inputType="date"
            textError="required"
            name="when1"
            id="when1"
            label="Дата отправления"
            value={stateForm.secondStep.departure}
            inputHadler={handlerInputDeparture}
         />
         <Input
            inputType="date"
            textError="required"
            name="when2"
            id="when2"
            label="Дата возвращения"
            value={stateForm.secondStep.return}
            inputHadler={handlerInputReturn}
         />

         <WrapperButtons>
            <ButtonFormBack
               type="button"
               id="back"
               onClick={() => changeStep(1)}
               value="Назад"
            />

            <ButtonForm type="submit" id="next">
               Дальше
            </ButtonForm>
         </WrapperButtons>
      </ContainerForm>
   )
}

const ContainerForm = styled.form`
   margin-top: 20px;
`

const WrapperButtons = styled.div`
   display: flex;
   margin: 0 -10px;
`
const ButtonForm = styled.button`
   flex: 0 1 50%;
   margin: 0 10px;
   border: 1px solid #ccc;
   padding: 8px 10px;
   font-size: 15px;
   cursor: pointer;
   background: rgb(239, 239, 239);
   transition: background 0.1s linear;

   &:hover {
      background: rgb(199, 199, 199);
   }
`

const ButtonFormBack = styled.input`
   flex: 0 1 50%;
   margin: 0 10px;
   border: 1px solid #ccc;
   padding: 8px 10px;
   font-size: 15px;
   cursor: pointer;
   background: rgb(239, 239, 239);
   transition: background 0.1s linear;

   &:hover {
      background: rgb(199, 199, 199);
   }
`
