import styled from 'styled-components';
import { Button as RawButton } from '@everlywell/leaves';

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px 24px;
  background: #FFFFFF;
  border: 1px solid #EEF5F6;
  box-sizing: border-box;
  /* Tile */

  box-shadow: 0px 7px 30px -10px rgba(220, 228, 229, 0.5);
  border-radius: 8px;
  margin-bottom: 24px;
`

export const Warning = styled.img`
  margin-right: 8px;
  margin-bottom: -4px;
`

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Actions = styled.div`
  margin-left: 48px;
`

export const Box = styled.img`
  width: 124px;
  margin-right: 12px;
`

export const Info = styled.div`
  width: 70%;
  h2 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
    /* or 133% */

    letter-spacing: 0.4px;
    font-feature-settings: 'ss01' on;

    color: #007377;
    margin: 0 0 8px 0;
  }
  h3 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    font-feature-settings: 'ss01' on;

    color: #444850;
    margin: 0;
    em {
      color: #007377;
      font-style: normal;
      font-weight: 400;
    }
  }
`

export const Button = styled(RawButton).attrs((props) => ({
  isDisabled: props.isDisabled,
}))`
  border-radius: 4px;
  width: 162px;
  font-weight: 500 !important;
  font-size: 16px !important;
  border: ${(props) => (props.isDisabled ? 'none' : '')};
  button {
    padding: 12px 24px;
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 24px;
    /* identical to box height, or 133% */

    text-align: center;
    letter-spacing: 0.3px;
  }
`

export const Details = styled.div`
  border-top: 1px solid #D6EBDD;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  p {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 23px;
    /* or 164% */

    display: flex;
    align-items: center;
    letter-spacing: 0.71px;
    font-feature-settings: 'ss01' on;

    color: #444850;
    margin: 0;
  }
`

export const Download = styled.p`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700 !important;
  font-size: 16px !important;
  line-height: 24px;
  /* or 150% */

  letter-spacing: 0.27px;
  font-feature-settings: 'ss01' on;

  color: #1E824C !important;
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`