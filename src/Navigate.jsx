import {useNavigate} from "react-router-dom";
import * as React from "react";

export function Navigate() {
  const navigate = useNavigate();

  const goToDescription = () => {
    navigate('/description');
  };

  const goToQuiz = () => {
    navigate('/quiz');
  };

  const goToStats = () => {
    navigate('/stats');
  };

  return (
    <div>
      <button onClick={goToDescription}>Описание</button>
      <button onClick={goToQuiz}>Квиз</button>
      <button onClick={goToStats}>Статистика</button>
    </div>
  );
};
