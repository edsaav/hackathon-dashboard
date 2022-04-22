import { Cards, SmallCards } from '../components/Cards/styles';
import { Alert } from '../components/home/Alert';
import { Checkup } from '../components/home/Checkup';
import { Goals } from '../components/home/Goals';
import { Graph } from '../components/home/Graph'
import { HeartHealth } from '../components/home/HeartHealth';
import { NextShipment } from '../components/home/NextShipment';
import { Resource } from '../components/home/Resource';
import { QuestionCard } from '../components/Profile/Questions/QuestionCard';

export const Home = () => {
  return (
    <>
      <Alert />
      <Goals />
      <Cards>
        <NextShipment />
        <Graph />
        <HeartHealth />
        <Checkup />
      </Cards>
      <SmallCards>
        <Resource imgSrc='images/doctor.png' text='How to Create and Maintain a Sleep Routine' />
        <Resource imgSrc='images/egg.png' text='How much cholesterol do eggs have?' />
        <QuestionCard question='Answer more questions about your pregnancy goals' />
      </SmallCards>
    </>
  );
};
