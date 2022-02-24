import { BaseSyntheticEvent, FC, useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../context'
import { IStateFrom } from '../Aviasales'
import { Input } from '../../../ui/input/Input'
//Реализовать форму первого шага

interface IProps {
   changeStep: (step: number) => void
}

export const FirstStep: FC<IProps> = ({ changeStep }) => {
   // const [isValid, setIsValid] = useState(false)
   const { stateForm, setStateForm } = useContext(Context)

   const submitHandler = (event: BaseSyntheticEvent<SubmitEvent>) => {
      event.preventDefault()

      changeStep(2)
   }

   const handlerInputFrom = (event: BaseSyntheticEvent<InputEvent>) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         firstStep: {
            ...state.firstStep,
            from: event.target.value,
         },
      }))
   }

   const handlerInputWhere = (event: BaseSyntheticEvent<InputEvent>) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         firstStep: {
            ...state.firstStep,
            where: event.target.value,
         },
      }))
   }

   return (
      <ContainerForm action="#" onSubmit={submitHandler}>
         <Input
            textError="required"
            inputType="text"
            name="from"
            id="from"
            label="Откуда"
            inputHadler={handlerInputFrom}
            value={stateForm.firstStep.from}
            // pattern="[А-ЯA-Z]{1}"
         />
         <Input
            textError="required"
            inputType="text"
            name="where"
            id="where"
            label="Куда"
            inputHadler={handlerInputWhere}
            value={stateForm.firstStep.where}
         />

         <ButtonForm type="submit" name="next">
            Дальше
         </ButtonForm>
      </ContainerForm>
   )
}

const ContainerForm = styled.form`
   margin-top: 20px;
`
const ButtonForm = styled.button`
   width: 100%;
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
