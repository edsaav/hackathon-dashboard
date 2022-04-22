import { Alert } from '../components/home/Alert';
import { Checkup } from '../components/home/Checkup';
import { Graph } from '../components/home/Graph'
import { HeartHealth } from '../components/home/HeartHealth';

export const Home = () => {
  return (
    <>
      <Alert />
      <Graph />
      <HeartHealth />
      <Checkup />
    </>
  );
};
