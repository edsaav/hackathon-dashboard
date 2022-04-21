import { size, typography, H4 } from '@everlywell/leaves';
import styled from 'styled-components';

export const LeftNavContainer = styled.div`
  min-height: 100vh;
  max-width: ${size.xl7}px;
  margin: 0px ${size.xl1}px ${size.xl1}px ${size.xl1}px;
`;

export const LeftNavGreeting = styled(H4)`
  font-weight: 500;
`;

export const LeftNavLinksContainer = styled.div`
  display: block;
`;

export const LeftNavLink = styled.div`
  ${typography.disabledText}
  font-weight: 400;
  padding: ${size.sm}px 0px;
`;
