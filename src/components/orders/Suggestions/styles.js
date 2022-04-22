import styled from 'styled-components';
import { Icons } from '@everlywell/leaves';

export const Wrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #EEF5F6;
  box-sizing: border-box;
  box-shadow: 0px 7px 30px -10px rgba(220, 228, 229, 0.5), inset 0px 4px 0px #007377;
  border-radius: 8px;
  width: 334px;
  padding: 29px;
  height: fit-content;
  margin-left: 33px;
`

export const Header = styled.h2`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: center;
  letter-spacing: 0.45px;
  font-feature-settings: 'ss01' on;

  color: #007377;
  width: 100%;
`

export const Arrow = styled(Icons.RightCaret)`
  width: 5px;
  padding-left: 13px;
`

export const Button = styled.div`
  background: #1E824C;
  padding: 12px 24px;
/* Button Shadow */

  box-shadow: 0px 7px 15px -606px #EEEEEE;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 133% */

  text-align: center;
  letter-spacing: 0.3px;
  font-feature-settings: 'ss01' on;
  width: calc(100%-48px);

  /* Gray to White/White */

  color: #FFFFFF;
  &:hover {
    background: #004E51;
  }
`