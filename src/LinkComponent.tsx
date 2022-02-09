import React, { useState } from "react";
import "./styles.css";
export const LinkComponent = () => {
  const [srcAnhor, setSrcAnhor] = useState<undefined | string>();

  const loadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.[0]) {
      const srcFile = URL.createObjectURL(e.target.files[0]);
      setSrcAnhor(srcFile);
    }
  };

  return (
    <>
      <div className="Link-Component">
        <div className="TopLInkContainer">
          <ul>
            <li>
              <a href="#img1">img1</a>
            </li>
            <li>
              <a href="#img2">img2</a>
            </li>
            <li>
              <a href="#img3">img3</a>
            </li>
          </ul>
          {/* сделать ссылки якоря к картинкам */}
        </div>
        {/* добавить картинку, по клику на которую она будет открываться в номов окне  
        ссылка на изображение: https://static.tildacdn.com/tild6263-3536-4564-b332-666237393539/react.png
        */}
        <a
          id="img1"
          href="https://static.tildacdn.com/tild6263-3536-4564-b332-666237393539/react.png"
          target="_blank"
        >
          <img
            src="https://static.tildacdn.com/tild6263-3536-4564-b332-666237393539/react.png"
            alt=""
          />
        </a>
        {/* добавить картинку, по клику на которую она будет открываться в в текущем окне  
        ссылка на изображение: https://i.pinimg.com/736x/bb/b7/96/bbb79637fa352254fe93ba9aacad1407.jpg
        */}
        <a
          id="img2"
          href="https://i.pinimg.com/736x/bb/b7/96/bbb79637fa352254fe93ba9aacad1407.jpg"
        >
          <img
            src="https://i.pinimg.com/736x/bb/b7/96/bbb79637fa352254fe93ba9aacad1407.jpg"
            alt=""
          />
        </a>
        {/* добавить картинку  
        ссылка на изображение: https://pbs.twimg.com/media/Et3fzuhXAAQ9dAz.jpg
        */}
        <img
          id="img3"
          src="https://pbs.twimg.com/media/Et3fzuhXAAQ9dAz.jpg"
          alt=""
        />
        {!srcAnhor && <input type="file" onChange={loadFile} />}
        {srcAnhor && (
          // добавить ссылку на скачку файла. В путь вставить  значение из srcAnhor

          // добавить ссылку на скачку файла с изменинием имени на "файл1". В путь вставить  значение из srcAnhor
          <>
            <a href={srcAnhor} download>
              файл со своим именем
            </a>
            <a href={srcAnhor} download="файл1">
              файл с именем файл1
            </a>
          </>
        )}
      </div>
    </>
  );
};
