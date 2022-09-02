import Poll from '../../components/Poll';
import Vote from '../../components/Vote';
import Chart from '../../components/Chart';

function Home() {
  return (
    <main className="grid grid-cols-3">
      <Poll />
      <Vote />
      <Chart />
    </main>
  );
}

export default Home;
