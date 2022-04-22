import styled from 'styled-components';

export const MenuItem = styled.li.attrs((props) => ({
  selected: props.selected,
}))`
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: 0.27px;
  font-feature-settings: 'ss01' on;

  /* Green/Green 5 */

  color: #1E824C;
  border-bottom: ${(props) => (props.selected ? '4px solid #008B84' : 'none')};
  list-style-type: none;
  display: inline;
  margin-right: 30px;
  padding-bottom: 8px;
  cursor: pointer;
  
  span {
    border-radius: 50%;
    background-color: #EDF5F1;
    margin-left: 4px;
    width: 34px;
    height: 34px;
    padding: 1px 7px;
    text-align: center;
  }
`