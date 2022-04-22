import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 0;
  &:first-child {
    margin-top: 32px;
  }
`

export const MainInfo = styled.div`
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Note = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const Info = styled.div`
  text-align: left;
  width: 100%;
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
    width: 100%;
  }
  h3 {
    position: static;
    width: 42px;
    height: 23px;
    left: 0px;
    top: 0px;

    /* Caption */

    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 23px;
    /* identical to box height, or 164% */

    letter-spacing: 0.71px;
    font-feature-settings: 'ss01' on;

    color: #444850;
    margin: 4px 0;
    &:last-child {
      text-align: right;
    }
  }
`

export const Box = styled.img`
  width: 102px;
`