import * as S from './styles';

export const ResultsReady = () => {
  return (
    <S.Banner>
      <S.BoxImage src='images/cholesterolBox.png'/>
      <S.BannerText><p>Your cholesterol and lipids test results are here</p></S.BannerText>
      <S.Button>View Now</S.Button>
    </S.Banner>
  )
}