import styled from 'styled-components';

export const Content = styled.div`
  padding: 32px;
  h2 {
    margin: 16px 0 0 0;
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
  h4 {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    /* EHS/Dark Teal */

    color: #015D58;
  }
  li {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    font-feature-settings: 'ss01' on;

    /* Gray to White/Gray 5 */

    color: #252228;
    list-style-type: none;
    padding: 19px 16px;
    background: #FFFFFF;
    /* Green/Green 2 */

    border: 1px solid #D6EBDD;
    box-sizing: border-box;
    border-radius: 2px;
    margin-top: 16px;
    width: 100%;
    cursor: pointer;
    &:hover {
      border: 1px solid #252228;

      span {
        border: 1px solid #252228;
      }
    }
  }
  ul {
    padding: 0;
  }
  span {
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    /* Green/Green 2 */

    border: 1px solid #D6EBDD;
    box-sizing: border-box;
    box-shadow: 4px 4px 15px -5px rgba(0, 0, 0, 0.1);
    margin-right: 12px;
    display: inline-block;
    border-radius: 50%;
    margin-bottom: -5px;
  }
`