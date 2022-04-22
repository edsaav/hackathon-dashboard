import styled from 'styled-components';
import { TertiaryLink as RawLink } from '@everlywell/leaves';

export const Goals = styled.div`
  width: 100%;

  background: #015D58;
  border-radius: 8px;
`

export const Content = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const Ribbon = styled.img`
  width: 64px;
`

export const Check = styled.img`
  width: 24px;
  position: absolute;
  left: 16px;
  top: 16px;
`

export const Left = styled.div`
  width: 50%;
  h3 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    /* Gray to White/White */

    color: #FFFFFF;
    margin-bottom: 0;
  }
  h2 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 31px;
    margin-top: 8px;
    /* or 133% */

    letter-spacing: 0.4px;
    font-feature-settings: 'ss01' on;

    /* Gray to White/White */

    color: #FFFFFF;
  }
`

export const Right = styled.div`
  width: 50%;
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

  /* Gray to White/White */

  color: #FFFFFF;
  ::before {
    background-color: #ffffff;
  }
`

export const ProgressBar = styled.div`
  width: 100%;
  height: 15px;

  /* Gray to White/White */

  background: #FFFFFF;
  border-radius: 100px;
`

export const Progress = styled.div`
  width: 30%;
  height: 15px;

  background: #1EA676;
  border-radius: 100px;
`

export const GoalCards = styled.ul`
  margin-left: 0;
`

export const GoalCard = styled.li`
  border: 1px solid #D6EBDD;
  box-sizing: border-box;
  border-radius: 8px;
  background: white;
  list-style-type: none;
  padding: 16px 56px;
  position: relative;
  margin-top: 8px;
  p {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    color: #000000;
    margin: 0 0 16px 0;
    width: 70%;
  }
  h4 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;
    color: #1B7E5D;
    margin: 0;
    width: 70%;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`