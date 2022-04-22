import { Row } from '@everlywell/leaves';
import { Cards } from '../components/Cards/styles';
import { Alert } from '../components/home/Alert';
import { Checkup } from '../components/home/Checkup';
import { Graph } from '../components/home/Graph'
import { HeartHealth } from '../components/home/HeartHealth';
import { NextShipment } from '../components/home/NextShipment';

export const Home = () => {
  return (
    <>
      <Alert />
      <Cards>
        <NextShipment />
        <Graph />
        <HeartHealth />
        <Checkup />
      </Cards>
      {/* <Row>
        <NextShipment />
        <Graph />
      </Row>
      <Row>
        <HeartHealth />
        <Checkup />
      </Row> */}
    </>
  );
};
