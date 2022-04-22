import { Col, colors } from '@everlywell/leaves';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LeftColumn = styled(Col)`
  flex-basis: 250px;
  background-color: ${colors.green0};
`;

export const RightColumn = styled(Col)`
  flex-basis: 80%;
  padding: 40px;
`;

export const RightContainer = styled.div``;
