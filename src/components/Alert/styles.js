import styled from 'styled-components';

export const Banner = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 7px 30px -10px rgba(220, 228, 229, 1), inset 4px 0px 0px #007377;
  border-radius: 8px;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const Progress = styled.img`
  height: 50px;
`

export const Text = styled.div`
  width: 100%;
  h3 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    letter-spacing: 0.266667px;
    color: #007377;
    margin: 0;
    padding-left: 20px;
    text-align: left;
  }
  h4 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 23px;
    /* identical to box height, or 164% */

    letter-spacing: 0.71px;
    font-feature-settings: 'ss01' on;

    /* Gray to White/Gray 5 */

    color: #252228;
    margin: 0;
    padding-left: 20px;
    text-align: left;
  }
`

export const Button = styled.button`
  width: 113px;
  height: 32px;
  border-radius: 2px;
  background-color: white;
  border: 1px solid #D6EBDD;
  cursor: pointer;
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: 0.27px;
  font-feature-settings: 'ss01' on;

  /* Green/Green 5 */

  color: #1E824C;
  &:hover {
    background-color: #D6EBDD;
  }
`