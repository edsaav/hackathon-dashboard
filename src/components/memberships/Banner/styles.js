import styled from 'styled-components';
import { TertiaryLink as RawLink } from '@everlywell/leaves';

export const QuestionCard = styled.div`

  background: #004E51;;
  border-radius: 8px;
  padding: 19px 24px 28px;
  list-style-type: none;
  position: relative;

  h3 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 28px;
    /* or 133% */

    letter-spacing: 0.4px;
    font-feature-settings: 'ss01' on;

    /* Gray to White/White */

    color: #FFFFFF;
    max-width: 80%;
    margin-bottom: 8px;
  }
  h4 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    margin-top: 8px;
    /* or 133% */

    letter-spacing: 0.4px;
    font-feature-settings: 'ss01' on;

    /* Gray to White/White */

    color: #FFFFFF;
    max-width: 80%;
  }

  a {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;
    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    color: #1E824C;
    width: 140px;
    height: 32px;
    background: #FFFFFF;

    border: 1px solid #D6EBDD;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    line-height: 30px;
    text-decoration: none;
    &:hover {
      background-color: #004E51;
      border: 1px solid white;
      color: white;
    }
  }
`

export const TertiaryLink = styled(RawLink)`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.27px;
  font-feature-settings: 'ss01' on;
  margin: 0 0 0 24px;

  /* Gray to White/White */

  color: #FFFFFF;
  ::before {
    background-color: #ffffff;
  }
`

export const Content = styled.div`
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const Flourish = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 18px;
  right: 18px;
`

export const FlourishUpperLeft = styled.div`
  width: 50%;
  height: 50%;
`

export const FlourishUpperRight = styled.div`
  width: 50%;
  height: 50%;
  background-color: #C9E8EB;
  border-radius: 50%;
`

export const FlourishLowerLeft = styled.div`
  width: 50%;
  height: 50%;
  background-color: #008B84;
  border-radius: 100% 0 0 0;
`

export const FlourishLowerRight = styled.div`
  width: 50%;
  height: 50%;
  background-color: #20A475;
  border-radius: 0 0 100% 0;
`