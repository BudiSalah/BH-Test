import { useContext, useState, useEffect, useRef } from 'react';
import { MainContext } from '../MainContext';
import Section from '../UI/Section';

function Vote({ className }) {
  const radioAnswers = useRef();

  const { question, answers, createPoll, setVotes } = useContext(MainContext);

  const [checkedInput, setCheckedInput] = useState('');

  function voteHandler() {
    const checkedInput = radioAnswers?.current?.querySelector?.(':checked');

    setVotes((oldVal) => {
      return oldVal.map((item) => {
        return item.name === checkedInput.value
          ? { ...item, count: item.count + 1 }
          : { ...item };
      });
    });

    setCheckedInput('');

    checkedInput.checked = false;
  }

  function updateCheckedInput() {
    setCheckedInput(radioAnswers?.current?.querySelector?.(':checked'));
  }

  useEffect(() => {
    setVotes((oldVal) => {
      return answers.map((item) => {
        const hasItem = oldVal.filter((itemOldVal) => {
          return itemOldVal?.name === item;
        });

        return hasItem?.length ? hasItem[0] : { name: item, count: 0 };
      });
    });
  }, [setVotes, answers]);

  useEffect(() => {
    const checkedInput = radioAnswers?.current?.querySelector?.(':checked');

    if (checkedInput?.checked) {
      checkedInput.checked = false;
    }
  }, [question, answers]);

  return (
    <Section
      className={`${className} flex flex-col flex-wrap items-stretch justify-between gap-2`}
    >
      <div className="flex flex-col flex-wrap gap-2">
        <h2>Vote</h2>

        {createPoll ? (
          <div className="flex flex-col gap-2">
            <h3 className="text-bold font-bold capitalize">{question}</h3>

            <ul
              ref={radioAnswers}
              className="flex w-full flex-col gap-2 px-8"
              onChange={updateCheckedInput}
            >
              {answers.map((item, index) => {
                return (
                  <li
                    key={`radio_answer_${index}`}
                    className="flex flex-row items-center gap-1"
                  >
                    <input
                      type="radio"
                      name="answer"
                      id={item.replace(/\s/g, '-') + '-' + index}
                      value={item}
                      className="cursor-pointer"
                    />

                    <label
                      htmlFor={item.replace(/\s/g, '-') + '-' + index}
                      className="cursor-pointer text-lg capitalize"
                    >
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <h3>Please, create a poll first!</h3>
        )}
      </div>

      {createPoll && (
        <button
          className="border border-gray-300 bg-gray-300 px-4 py-1 uppercase"
          onClick={voteHandler}
          disabled={!checkedInput}
        >
          vote
        </button>
      )}
    </Section>
  );
}

export default Vote;
