import { createContext, useState } from 'react';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [createPoll, setCreatePoll] = useState(false);

  const defaultObj = {
    question,
    setQuestion,
    answers,
    setAnswers,
    createPoll,
    setCreatePoll,
  };

  return (
    <MainContext.Provider value={defaultObj}>{children}</MainContext.Provider>
  );
}

export default MainProvider;
