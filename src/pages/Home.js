import { Alert } from '../components/home/Alert';
import { Checkup } from '../components/home/Checkup';
import { HeartHealth } from '../components/home/HeartHealth';

export const Home = () => {
  return (
    <>
      <Alert />
      <HeartHealth />
      <Checkup />
    </>
  );
};
