import styled from 'styled-components';
import { TertiaryLink as RawTertiaryLink } from '@everlywell/leaves';

export const TertiaryLink = styled(RawTertiaryLink)`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.27px;
  font-feature-settings: 'ss01' on;

  /* Green/Green 5 */

  color: #1E824C;
`

export const Content = styled.div`
  padding: 32px;
  h2 {
    margin: 16px 0 0 0;
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 31px;
    /* identical to box height, or 133% */

    letter-spacing: 0.4px;
    font-feature-settings: 'ss01' on;

    color: #004E51;
  }
  h4 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    /* EHS/Dark Teal */

    color: #015D58;
    margin: 0;
  }
  p {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;
    margin: 0 0 20px 0;
  }
  img {
    width: 100%;
    margin-bottom: 30px;
  }
`