import styled from 'styled-components';
import { Icons } from '@everlywell/leaves';

export const Wrapper = styled.div`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  font-feature-settings: 'ss01' on;

  color: #444850;
  background: #FFFFFF;
  border: 1px solid #EEF5F6;
  box-sizing: border-box;
  box-shadow: 0px 7px 30px -10px rgba(220, 228, 229, 0.5), inset 0px 4px 0px #007377;
  border-radius: 8px;
  width: 352px;
  padding: 29px;
  height: fit-content;
  margin-left: 33px;
`

export const Info = styled.div`
  padding: 19px 0;
  border-top: 1px solid #D6EBDD;
  border-bottom: 1px solid #D6EBDD;
  margin: 0;
  p {
    margin: 0;
  }
`

export const Spacer = styled.div`
  display: block;
  width: 100%;
  height: 32px;
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  em {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    color: #71AC85;
  }
  span {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    color: #2A6B48;
    background: #D6EBDD;
    border-radius: 4px;
    padding: 0 8px;
    margin-left: 8px;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between
`

export const Detail = styled.h3`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.27px;
  font-feature-settings: 'ss01' on;
  margin: 0;

  /* Teal/Teal 6 */

  em {
    color: #007377;
  }
  &:last-child {
    margin-bottom: 20px;
  }
`

export const Header = styled.h2`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */

  text-align: left;
  letter-spacing: 0.45px;
  font-feature-settings: 'ss01' on;

  color: #007377;
  width: 100%;
  margin: 0 0 8px 0;
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
  margin-top: 50px;

  /* Gray to White/White */

  color: #FFFFFF;
  &:hover {
    background: #004E51;
  }
`