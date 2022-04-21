import styled from 'styled-components';

export const Content = styled.div`
  padding: 32px;
  h2 {
    margin: none;
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
  p {
    margin: none;
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    /* or 162% */

    font-feature-settings: 'ss01' on;

    color: #000000;
  }
  h3 {
    margin: none;
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 23px;
    /* identical to box height, or 164% */

    letter-spacing: 0.71px;
    font-feature-settings: 'ss01' on;

    /* Teal/Teal 6 */

    color: #007377;
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    margin-bottom: -2px;
  }
`

export const Footer = styled.div`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 23px;
  /* identical to box height, or 164% */

  letter-spacing: 0.71px;
  font-feature-settings: 'ss01' on;

  color: #000000;
  display: flex;
  padding: 12px;
  border-top: 1px solid #D6EBDD;
  justify-content: space-between;
`

export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
  svg {
    height: 32px;
    width: 32px;
    &:first-child {
      color: #1E824C;
    }
  }
`

export const Badge = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 32px;
  right: 32px;
`