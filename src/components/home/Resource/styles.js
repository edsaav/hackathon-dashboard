import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0px 7px 30px -10px rgba(220, 228, 229, 1);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  width: 260px;
  margin-right: 48px;
  cursor: pointer;
  &:hover {
    box-shadow: 12px 12px 30px -10px rgba(220, 228, 229, 1);;
  }
`

export const Details = styled.div`
  padding: 8px;
`

export const Image = styled.img`
  width: 100%;
  height: 143px;
`

export const Text = styled.p`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 23px;
  /* or 164% */

  letter-spacing: 0.71px;
  font-feature-settings: 'ss01' on;

  color: #000000;
  margin: 0 0 4px 0;
`

export const Tag = styled.aside`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */

  letter-spacing: 0.71px;
  font-feature-settings: 'ss01' on;

  color: #266041;
  background: #F5FAF7;
  border-radius: 16px;
  padding: 2px 6px;
  display: inline;
`