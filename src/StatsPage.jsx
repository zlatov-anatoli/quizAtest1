import React, { useEffect, useState } from 'react';
import { Navigate } from './Navigate';

export const StatsPage = ({ correctAnswers }) => {
  const [allCorrectAnswers, setAllCorrectAnswers] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/stats');
        const data = await response.json();

        if (data.success) {
          setAllCorrectAnswers(data.allCorrectAnswers);
        } else {
          console.error('Error fetching stats:', data.message);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      <Navigate />
      <div>
        <h1>Статистика</h1>
        <p>Количество верных ответов: {correctAnswers.length}</p>
      </div>
    </>
  );
};
