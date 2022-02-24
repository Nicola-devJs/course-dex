import { FC, useContext, BaseSyntheticEvent } from 'react'
import styled from 'styled-components'
import { Context } from '../context'
import { Input } from '../../../ui/input/Input'
import { IStateFrom } from '../Aviasales'
import { Switch } from '../../../ui/Switch'
import { InputFile } from '../../../ui/input/InputFile'
//Реализовать форму третьего шага

interface IProps {
   changeStep: (step: number) => void
}

export const ThirdStep: FC<IProps> = ({ changeStep }) => {
   const { stateForm, setStateForm } = useContext(Context)

   const submitHandler = (event: BaseSyntheticEvent<SubmitEvent>) => {
      event.preventDefault()

      // console.log(stateForm)
      alert(`
      Город отправления: ${stateForm.firstStep.from}
      Город приезда: ${stateForm.firstStep.where}
      Дата отправления: ${stateForm.secondStep.departure}
      Дата возвращения: ${stateForm.secondStep.return}
      Колличество билетов: ${stateForm.thirdStep.tickets}
      Класс: ${
         stateForm.thirdStep.select === 'lower'
            ? 'Супер эконом (стоячий)'
            : stateForm.thirdStep.select === 'economy'
            ? 'Эконом (табурет)'
            : stateForm.thirdStep.select === 'business'
            ? 'Бизнес (кресло dxRacer)'
            : null
      }
      Режим трезвый пилот: ${
         stateForm.thirdStep.customCheckbox ? 'Включен' : 'Выключен'
      }
      ${
         stateForm.thirdStep.select === 'business'
            ? `Я красавчик: ${
                 stateForm.thirdStep.confirm ? 'Да' : 'Наврное нет('
              }`
            : ''
      }
      
      `)
   }

   const handlerInputTickets = (event: BaseSyntheticEvent<InputEvent>) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         thirdStep: {
            ...state.thirdStep,
            tickets: event.target.value,
         },
      }))
   }

   const handelChangeSwitch = (value: boolean, event: BaseSyntheticEvent) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         thirdStep: {
            ...state.thirdStep,
            customCheckbox: value,
         },
      }))
   }

   const handleSelect = (event: BaseSyntheticEvent) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         thirdStep: {
            ...state.thirdStep,
            select: event.target.value,
         },
      }))
   }

   const handlerConfirm = (event: BaseSyntheticEvent) => {
      setStateForm((state: IStateFrom) => ({
         ...state,
         thirdStep: {
            ...state.thirdStep,
            confirm: event.target.checked,
         },
      }))
   }

   return (
      <ContainerForm action="#" onSubmit={submitHandler}>
         <Fieldset>
            <legend>Параметры</legend>

            <Input
               inputType="number"
               textError="required"
               name="tickets"
               id="tickets"
               label="Количество билетов"
               value={stateForm.thirdStep.tickets}
               inputHadler={handlerInputTickets}
            />

            <Option>
               <label htmlFor="select">Класс</label>
               <Select
                  value={stateForm.thirdStep.select}
                  onChange={handleSelect}
                  name="class"
                  id="select"
               >
                  <option value="lower">Супер эконом (стоячий)</option>
                  <option value="economy">Эконом (табурет)</option>
                  <option value="business">Бизнес (кресло dxRacer)</option>
               </Select>
            </Option>
            <Option>
               <label htmlFor="switch">Трезвый пилот</label>
               <Switch
                  id="switch"
                  value={stateForm.thirdStep.customCheckbox}
                  handelChange={handelChangeSwitch}
               />
            </Option>
         </Fieldset>
         {stateForm.thirdStep.select &&
         stateForm.thirdStep.select === 'business' ? (
            <Fieldset>
               <p>
                  В бизнесс классе летают только <br /> красивые люди.
               </p>
               <label>
                  <input
                     type="checkbox"
                     onChange={handlerConfirm}
                     checked={stateForm.thirdStep.confirm}
                  />{' '}
                  Я красавчик!
               </label>
               {stateForm.thirdStep.confirm && stateForm.thirdStep.confirm ? (
                  <InputFile />
               ) : null}
            </Fieldset>
         ) : null}

         <WrapperButtons>
            <ButtonFormBack
               type="button"
               name="backToSecond"
               onClick={() => changeStep(2)}
               value="Назад"
            />

            <OrderForm type="submit" name="order">
               Заказать
            </OrderForm>
         </WrapperButtons>
      </ContainerForm>
   )
}

const ContainerForm = styled.form`
   margin-top: 20px;
`

const Fieldset = styled.fieldset`
   padding: 10px;
   margin-bottom: 15px;
`

const WrapperButtons = styled.div`
   display: flex;
   margin: 0 -10px;
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

const OrderForm = styled.button`
   flex: 0 1 50%;
   margin: 0 10px;
   border: none;
   border-radius: 8px;
   padding: 8px 10px;
   font-size: 15px;
   font-weight: 700;
   color: #fff;
   text-transform: uppercase;
   cursor: pointer;
   background: rgb(204, 104, 22);
   transition: background 0.1s linear;

   &:hover {
      background: rgba(204, 104, 22, 0.808);
   }
`

const Option = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const Select = styled.select`
   &:focus {
      outline: none;
   }
`
