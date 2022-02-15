export const ValidComponent = () => {
  const submit = (e: any) => {
    alert(e.target.password.value);
  };

  return (
    <>
      <form onSubmit={submit}>
        <fieldset>
          <legend>Подформа 1</legend>
          <label htmlFor="">скрытый</label>
          <input type="hidden" />

          <label htmlFor="">пароль</label>
          <input name="password" type="password" required />

          <label htmlFor="">Чтение</label>
          <input type="text" value="inn" readOnly />

          <label htmlFor="">радио кнопки</label>
          <div id="radioGroup">
            <input type="radio" name="radioBtn" id="testBtn1" />
            testBtn1
            <input type="radio" name="radioBtn" id="testBtn2" />
            testBtn1
            <input type="radio" name="radioBtn" id="testBtn3" />
            testBtn1
            <input type="radio" name="radioBtn" id="testBtn4" />
            testBtn1
          </div>
        </fieldset>
        <fieldset>
          <legend>Подформа 2</legend>

          <label htmlFor="">не активное поле</label>
          <input type="text" disabled />

          <label htmlFor="">Число</label>
          <input type="number" min="1" max="99" defaultValue={1} />

          <label htmlFor="">Поле с граниченной дленой</label>
          <input type="text" maxLength={9} minLength={3} />

          <label htmlFor=""> email с множественным</label>
          <input
            type="email"
            className={"E_mail"}
            minLength={3}
            maxLength={10}
          />

          <label htmlFor="">Поле c подсказкой</label>
          <input type="text" placeholder="подсказка" />
        </fieldset>
        <fieldset>
          <legend>Подформа 3</legend>
          <label htmlFor="">Дата</label>
          <input type="date" />

          <label htmlFor="">Номер машины</label>
          <input
            id="auto_number"
            type="text"
            pattern="[A-Z]{1}\s[1-9]{3}\s[A-Z]{2}"
          />

          <label htmlFor="">загрузка файла</label>
          <input type="file" />

          <label htmlFor="">Чекбоксы</label>
          <div>
            <input type="checkbox" name="check" id="testcheck1" /> условие 1
            <input type="checkbox" name="check" id="testcheck2" /> условие 2
            <input type="checkbox" name="check" id="testcheck3" /> условие 3
          </div>
        </fieldset>

        <button type="submit">отправить</button>
        <button type="reset">сбросить</button>
      </form>
      <div className={"Background-fon"}></div>
    </>
  );
};
