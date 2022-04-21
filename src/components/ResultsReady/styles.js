import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #1B7E5D;
  box-shadow: 0px 7px 30px -10px rgba(220, 228, 229, 0.5);
  border-radius: 8px;
  display: flex;
  padding: 20px 30px;
  align-items: center;
  justify-content: space-between;
`

export const BoxImage = styled.img`
  width: 140px;
  margin-bottom: -13px;
`

export const BannerText = styled.div`
  width: 100%;
  p {
    width: 300px;
    padding-left: 20px;
    text-align: left;
    font-family: 'Nexa';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
    /* or 133% */
  
    letter-spacing: 0.4px;
    font-feature-settings: 'ss01' on;
  
    /* Gray to White/White */
  
    color: #FFFFFF;
  }
`

export const Button = styled.button`
  min-width: 130px;
  height: 50px;
  padding: 15px;
  border: 1px solid white;
  background-color: #1B7E5D;
  font-family: 'Nexa';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;text-align: center;
  letter-spacing: 0.3px;color: #FFFFFF;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #1B7E5D;
  }
`