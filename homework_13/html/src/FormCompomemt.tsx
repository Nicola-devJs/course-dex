export const FormCompomemt = () => {
  const submit = (e: any) => {
    // e.preventDefault();
    alert(e.target.password[0].value);
  };

  return (
    <>
      <form action="#" onSubmit={submit}>
        <fieldset>
          <legend>Подплатформа 1</legend>
          <label htmlFor="password1">Пароль</label>
          <input type="password" id="password1" name="password" />
          <label htmlFor="login">Чтение</label>
          <input type="text" id="login" />
          <label htmlFor="">радио кнопки</label>
          <div>
            <input type="radio" id="TestBtn1" name="radioTest" />
            TestBtn1
            <input type="radio" id="TestBtn2" name="radioTest" />
            TestBtn2
            <input type="radio" id="TestBtn3" name="radioTest" />
            TestBtn3
          </div>
        </fieldset>
        <fieldset>
          <legend>Подплатформа 2</legend>
          <label htmlFor="not">не активное поле</label>
          <input type="text" id="not" disabled />
          <label htmlFor="num">число</label>
          <input type="number" id="num" min="1" max="100" />
          <label htmlFor="length">Поле с граниченной длиной</label>
          <input type="text" id="length" minLength={3} maxLength={12} />
          <label htmlFor="email">email с множественным вводом</label>
          <input type="email" id="email" />
          <label htmlFor="pod">поле с подсказкой</label>
          <input type="text" id="pod" placeholder="подсказка" />
        </fieldset>

        <fieldset>
          <legend>Подплатформа 3</legend>
          <label htmlFor="date">Дата</label>
          <input id="date" type="date" />
          <label htmlFor="tel">Телефон</label>
          <input id="tel" type="tel" />
          <label htmlFor="file">Загрузка файла</label>
          <input id="file" type="file" />
          <label>Чекбоксы</label>
          <div>
            <input type="checkbox" id="u1" />
            условие1
            <input type="checkbox" id="u2" />
            условие
            <input type="checkbox" id="u3" />
            условие3
          </div>
        </fieldset>
        <fieldset disabled>
          <legend>Подплатформа 4</legend>
          <label htmlFor="password">Пароль</label>
          <input type="password" id="password" />
          <label htmlFor="login">Чтение</label>
          <input type="text" id="login" />
          <label htmlFor="">радио кнопки</label>
          <div>
            <input type="radio" id="TestBtn1" name="radioTest" />
            TestBtn1
            <input type="radio" id="TestBtn2" name="radioTest" />
            TestBtn2
            <input type="radio" id="TestBtn3" name="radioTest" />
            TestBtn3
          </div>
        </fieldset>

        <fieldset>
          <legend>Подплатформа 5</legend>
          <label htmlFor="">Select</label>
          <select name="" id="" multiple required size={3}>
            <option value="value1" selected>
              value1
            </option>
            <option value="value2">value2</option>
            <option value="value3">value3</option>
            <optgroup label="Group options">
              <option value="value4group" selected>
                value4group
              </option>
              <option value="value5group">value5group</option>
            </optgroup>
          </select>
          <label htmlFor="">Текст</label>

          <textarea
            name="textArea"
            id=""
            cols={30}
            rows={10}
            maxLength={100}
            value="Поле для набора текста обязательно и максимум 100 символов"
            // readOnly={false}
            required
          ></textarea>
        </fieldset>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      {/* 1 Сделать форму  с кнопкой отправки и кнопкой сброса полей.
   По кнопке отправить долна вызваться функция которая вызвает alert с паролем */}
      {/*2  разбить форму на 4 группы элементов с заголовками (Подформа 1, Подформа 2, ...) */}

      {/* 3 */}
      {/* 1 группа : скрытое поле, обязательное поле пароля,
       текстовое поля(только для чтения), группа из 3 радиобатаннов */}
      {/* 2 группа : не активное поле,поле с числами с ограничением от 1 до 100,
       текстовое поля(с ограничением длины от 3 до 9 символов), 
       поле email с множественным вводом, текстове поле c подсказкой */}
      {/* 3 группа : поле с датой,поле телефона, поле загрузки файлаю, 
       группа из 3 checkbox */}
      {/* 4 группа аналогична с 1 только все поля должны быть не активны. */}
      {/* Домашка 5 группа множественный селект, чтобы несколько было изночально выбрано (другие атрибуты) и текстареа изночальный текст и валидная длина. */}
    </>
  );
};
