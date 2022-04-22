import styled from 'styled-components';
import { Icons } from '@everlywell/leaves';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0;
`

export const Button = styled(Icons.AddToCart)`
  width: 24px;
  cursor: pointer;
`

export const Info = styled.div`
  text-align: left;
  h2 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    color: #1E824C;
    margin: 4px 0;
    cursor: pointer;
  }
  h3 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    font-feature-settings: 'ss01' on;

    color: #444850;
    margin: 4px 0;
  }
`

export const Box = styled.img`
  width: 120px;
`