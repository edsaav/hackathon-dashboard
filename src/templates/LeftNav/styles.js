import { size, typography, H4 } from '@everlywell/leaves';
import styled from 'styled-components';

export const LeftNavContainer = styled.div`
  min-height: 100vh;
  max-width: ${size.xl7}px;
  margin: 0px ${size.xl1}px ${size.xl1}px ${size.xl1}px;
`;

export const LeftNavGreeting = styled(H4)`
  font-weight: ${typography.weight.regular};
`;

export const LeftNavLinksContainer = styled.div`
  display: block;
`;

export const LeftNavLink = styled.a`
  display: block;
  font-weight: ${typography.weight.bold};
  padding: ${size.sm}px 0px;
  cursor: pointer;
  letter-spacing: 1px;
`;
