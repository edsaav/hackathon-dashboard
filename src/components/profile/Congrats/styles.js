import styled from 'styled-components';

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  border: 1px solid #1EA676;
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  margin: 70px 0;
  p {
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    letter-spacing: 0.27px;
    font-feature-settings: 'ss01' on;

    /* Green/Green 5 */

    color: #1E824C;
    max-width: 605px;
  }

  img {
    width: 64px;
  }
`