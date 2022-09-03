import { createContext, useState } from 'react';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);

  const defaultObj = {
    question,
    setQuestion,
    answers,
    setAnswers,
  };

  return (
    <MainContext.Provider value={defaultObj}>{children}</MainContext.Provider>
  );
}

export default MainProvider;
