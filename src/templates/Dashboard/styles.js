import { Col, colors, size } from '@everlywell/leaves';
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

export const RightColumn = styled(Col)`
  flex-basis: 80%;
  padding: ${size.xl1}px;
`;
