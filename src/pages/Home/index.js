import Poll from '../../components/Poll';
import Vote from '../../components/Vote';
import Graph from '../../components/Graph';

function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
      <Poll className="col-span-3 md:col-auto" />
      <Vote className="col-span-3 md:col-auto" />
      <Graph className="col-span-3 lg:col-auto" />
    </main>
  );
}

export default Home;
