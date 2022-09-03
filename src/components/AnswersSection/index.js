import { useContext, useState, useRef, useEffect } from 'react';
import { INPUT_MAX_LENGTH } from '../../utils/consts';
import { MainContext } from '../MainContext';
import TextInput from '../units/TextInput';

function AnswersSection({ className }) {
  const answerInput = useRef();
  const answersList = useRef();

  const {
    question,
    setQuestion,
    answers,
    setAnswers,
    createPoll,
    setCreatePoll,
  } = useContext(MainContext);

  const [answer, setAnswer] = useState('');
  const [targetIndex, setTargetIndex] = useState(NaN);

  const LiList = ({ className }) => {
    function updateAnswer(e) {
      const { value } = e.target;

      const answersItems = Array.from(
        answersList?.current?.querySelectorAll('input')
      );

      const _targetIndex = answersItems?.indexOf(e.target);

      setTargetIndex(_targetIndex);

      setAnswers((oldVal) => {
        oldVal[_targetIndex] = value;

        return [...oldVal];
      });
    }

    function updateAnswerOnBlur(e) {
      if (e.target.value !== '') return;

      setTargetIndex(NaN);
      setAnswers((oldVal) => {
        return oldVal.filter((item) => item);
      });
    }

    function removeAnswer(e) {
      const targetLi = e.target.previousElementSibling;

      setAnswers((oldVal) => {
        return oldVal.filter((item) => item !== targetLi.value);
      });
    }

    return answers.map((item, index) => {
      return (
        <li
          key={`answer_${index}`}
          className={`${className} flex flex-row gap-2 text-lg`}
        >
          <input
            type="text"
            value={item}
            onInput={updateAnswer}
            onBlur={updateAnswerOnBlur}
            /* eslint-disable no-self-assign */
            onChange={(e) => (e.target.value = e.target.value)}
            autoFocus={index === targetIndex}
            className="grow outline-none"
          />

          <button onClick={removeAnswer}>❌</button>
        </li>
      );
    });
  };

  function addAnswer() {
    if (!answer) return;

    const exists = answers.some((item) => item === answer);

    if (exists) {
      alert('This answer already exists!');
      return;
    }

    if (answer?.length <= INPUT_MAX_LENGTH) {
      setAnswers((oldVal) => {
        return [...oldVal, answer];
      });

      setAnswer('');
    }

    answerInput?.current?.focus();
  }

  function resetPoll() {
    setQuestion('');
    setAnswers([]);
    setCreatePoll(false);
  }

  useEffect(() => {
    if (answerInput.current) answerInput.current.disabled = question === '';
  }, [question]);

  return (
    <div className={`${className} mt-8 flex flex-col gap-2`}>
      <h2>Answers</h2>

      <ul
        ref={answersList}
        className="flex w-full list-disc flex-col gap-2 px-8"
        style={{ wordBreak: 'break-word' }}
      >
        <LiList />
      </ul>

      {answers?.length < 10 && (
        <div
          className="flex flex-row flex-wrap items-start gap-2"
          onKeyDown={({ code }) => /enter/i.test(code) && addAnswer()}
          onFocus={() => setTargetIndex(NaN)}
        >
          <TextInput
            ref={answerInput}
            state={answer}
            stateHandler={setAnswer}
            name="answer1-input"
            placeholder="Please enter your answer..."
          />

          <button
            className="border border-gray-300 bg-gray-300 px-4 py-2 uppercase"
            disabled={!answer}
            onClick={addAnswer}
          >
            add
          </button>
        </div>
      )}

      <section className="flex flex-row items-center justify-between">
        {answers?.length > 0 && (
          <>
            <p className="grow capitalize">
              {answers?.length}/10 possible answers
            </p>

            <button
              className="border border-gray-300 bg-gray-300 px-4 py-1 uppercase"
              onClick={resetPoll}
            >
              reset
            </button>
          </>
        )}
      </section>

      {answers?.length > 1 && !createPoll && (
        <button
          className="border border-gray-300 bg-gray-300 px-4 py-1 uppercase"
          onClick={() => setCreatePoll(true)}
        >
          create
        </button>
      )}
    </div>
  );
}

export default AnswersSection;
