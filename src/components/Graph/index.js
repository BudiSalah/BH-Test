import { useContext, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { MainContext } from '../MainContext';
import Section from '../UI/Section';

function Graph() {
  const { question, answers, createPoll, votes } = useContext(MainContext);

  const [options, setOptions] = useState({
    chart: {
      id: 'apexchart-example',
    },
    xaxis: {
      categories: answers,
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'series-1',
      data: votes.map((item) => item.count),
    },
  ]);

  const [totalVotes, setTotalVotes] = useState(NaN);

  useEffect(() => {
    setOptions({
      chart: {
        id: 'apexchart-example',
      },
      xaxis: {
        categories: answers,
      },
    });

    setSeries([
      {
        name: 'series-1',
        data: votes.map((item) => item.count),
      },
    ]);

    setTotalVotes((oldVal) => {
      if (votes?.length) {
        return votes
          .map((item) => item.count)
          .reduce((acc, current) => acc + current);
      }

      return oldVal;
    });
  }, [answers, votes]);

  return (
    <Section className="flex flex-col flex-wrap items-stretch justify-between gap-2">
      {createPoll && votes?.length > 0 ? (
        <>
          <h2>{question}</h2>
          <Chart options={options} series={series} type="bar" height={320} />

          <p className="capitalize">total votes: {totalVotes}</p>
        </>
      ) : (
        <h2>Please, vote first to see the results!</h2>
      )}
    </Section>
  );
}

export default Graph;
