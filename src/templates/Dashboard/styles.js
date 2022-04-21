import { Col, colors } from '@everlywell/leaves';
import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LeftColumn = styled(Col)`
  max-width: 70%;
  flex-basis: auto;
  background-color: ${colors.green0};
`;

export const RightContainer = styled.div``;
