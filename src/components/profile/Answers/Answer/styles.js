import styled from 'styled-components';

export const AnswerCard = styled.li`
  border: 1px solid #D6EBDD;
  border-radius: 8px;
  padding: 9px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  min-width: 450px;
  a {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: right;
    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    /* Green 5 */

    color: #1E824C;
    text-decoration: none;
    &:hover {
      color: #1E824C;
      text-decoration: underline;
    }
  }
  button {
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
  }
`

export const Content = styled.div.attrs((props) => ({
  answered: props.answered,
}))`
  h3 {
    font-family: 'Nexa';
    margin: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    letter-spacing: 0.266667px;
    font-feature-settings: 'ss01' on;

    /* Gray to White/Gray 5 */

    color: ${(props) => (props.answered ? '#252228' : '#AAA9AC')};
  }
  h4 {
    font-family: 'Nexa';
    margin: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    font-feature-settings: 'ss01' on;

    /* Gray to White/Gray 5 */

    color: #252228;
    min-height: 20px;
  }
`