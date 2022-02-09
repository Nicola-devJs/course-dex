import React from 'react'
import './styles.css'
export const SemanticComponent = () => {
   return (
      // Переписать под смантический стиль(пример как должно выглядеть в ../public/semanticExample)
      <>
         <div>
            <div id="menu">
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
            </div>
         </div>
         <div>
            <div>
               <a href="#">Необязательный пункт 1</a>
               <a href="#">Необязательный пункт 2</a>
               <a href="#">Необязательный пункт 3</a>
            </div>
         </div>
         <div>
            <div>Lorem ipsum dolor sit amet.</div>

            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
               dicta et dolorum nostrum iure ipsum cumque ducimus sit
               praesentium eos?
            </p>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Praesentium molestias libero dolorum modi perspiciatis
               repudiandae quas enim delectus harum quam, quae consequatur,
               exercitationem cumque dicta eaque. Placeat, possimus quisquam
               veniam at ipsam dicta necessitatibus voluptatum eaque
               exercitationem porro fuga quia maxime, natus facilis quo, harum
               molestiae cumque. Accusamus, fuga nesciunt!
            </p>

            <div>
               <div>Lorem.</div>

               <ul>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem, ipsum.</li>
               </ul>
            </div>

            <div>
               <div>Lorem.</div>

               <div>
                  <div>Lorem. 1</div>
                  <div>Lorem.</div>
                  <a href="#">Lorem.</a>
               </div>

               <div>
                  <div>Lorem. 1</div>
                  <div>Lorem.</div>
                  <a href="#">Lorem.</a>
               </div>
            </div>
         </div>
         <div>
            <ul>
               <li>соц сети</li>
               <li>партнеры</li>
               <li>контактные данные</li>
            </ul>
         </div>
      </>
   )
}
