import { Col } from '@everlywell/leaves';
import * as S from './styles';

import { LeftNav } from '../LeftNav';

export const Dashboard = () => {
  return (
    <S.DashboardContainer>
      <S.LeftColumn>
        <LeftNav />
      </S.LeftColumn>
      <Col>
        <S.RightContainer>
          <div>Right Side</div>
        </S.RightContainer>
      </Col>
    </S.DashboardContainer>
  );
};
