import { createContext, useState } from 'react';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [question, setQuestion] = useState('');

  const defaultObj = {
    question,
    setQuestion,
  };

  return (
    <MainContext.Provider value={defaultObj}>{children}</MainContext.Provider>
  );
}

export default MainProvider;
