import { useContext } from 'react';
import { MainContext } from '../MainContext';
import Section from '../UI/Section';
import TextInput from '../units/TextInput';

function Poll() {
  const { question, setQuestion } = useContext(MainContext);

  return (
    <Section className="flex flex-col flex-wrap items-stretch">
      <TextInput
        label="question"
        state={question}
        stateHandler={setQuestion}
        name="question-input"
        placeholder="Please enter your question..."
      />
    </Section>
  );
}

export default Poll;
