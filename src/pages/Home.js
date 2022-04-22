import { Alert } from '../components/Alert';
import { ResultsReady } from '../components/ResultsReady';
import { HeartHealth } from '../components/HeartHealth';

export const Home = () => {
  return (
    <>
      <Alert />
      <ResultsReady />
      <HeartHealth />
    </>
  );
};
