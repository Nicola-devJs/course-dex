import React from "react";
import "./styles.css";
export const SemanticComponent = () => {
  return (
    // Переписать под смантический стиль(пример как должно выглядеть в ../public/semanticExample)
    <>
      <header>
        <nav id="menu">
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/about">О нас</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <aside>
          <nav>
            <a href="#">Необязательный пункт 1</a>
            <a href="#">Необязательный пункт 2</a>
            <a href="#">Необязательный пункт 3</a>
          </nav>
        </aside>

        <h1>Lorem ipsum dolor sit amet.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dicta
          et dolorum nostrum iure ipsum cumque ducimus sit praesentium eos?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          molestias libero dolorum modi perspiciatis repudiandae quas enim
          delectus harum quam, quae consequatur, exercitationem cumque dicta
          eaque. Placeat, possimus quisquam veniam at ipsam dicta necessitatibus
          voluptatum eaque exercitationem porro fuga quia maxime, natus facilis
          quo, harum molestiae cumque. Accusamus, fuga nesciunt!
        </p>

        <section>
          <h2>Lorem.</h2>

          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </section>

        <section>
          <h2>Lorem.</h2>

          <article>
            <h3>Lorem. 1</h3>
            <div>Lorem.</div>
            <a href="#">Lorem.</a>
          </article>

          <article>
            <h3>Lorem. 1</h3>
            <div>Lorem.</div>
            <a href="#">Lorem.</a>
          </article>
        </section>
      </main>
      <footer>
        <ul>
          <li>соц сети</li>
          <li>партнеры</li>
          <li>контактные данные</li>
        </ul>
      </footer>
    </>
  );
};
