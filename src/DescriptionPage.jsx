import React from 'react';
import {Navigate} from "./Navigate";

export const DescriptionPage = () => {
  return (
    <>
      <Navigate/>
      <div>
        <h1>Описание игры "QuizOpos" для программистов</h1>
        <p>
          Добро пожаловать в "QuizOpos" - увлекательную викторину для настоящих программистов!
          Протестируйте свои знания, решите программистские головоломки и узнайте, насколько вы знакомы с миром кодинга.
        </p>
        <p>
          В игре вас ждут вопросы на различные темы: языки программирования, алгоритмы, структуры данных и многое
          другое.
          Выберите правильные ответы из вариантов, чтобы подтвердить свою экспертизу в программировании.
        </p>
        <p>
          "QuizOpos" предоставляет возможность проверить свои знания, узнать что-то новое и, конечно же, конкурировать с
          другими
          программистами за звание лучшего викторинщика.
        </p>
        <p>
          Готовы к вызову? Начните игру прямо сейчас и докажите, что программирование - это ваше призвание!
        </p>
      </div>
    </>
  );
};
