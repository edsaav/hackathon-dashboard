import * as S from './styles';

export const Order = ({name, imgSrc, price }) => {
  return (
    <S.Wrapper>
      <S.Summary>
        <S.Box src={imgSrc} />
        <S.Info>
          <h2>{name}</h2>
          <h3>Order delivered: February 29, 2022</h3>
        </S.Info>
        <S.Button>Buy again</S.Button>
      </S.Summary>
      <S.Details>
        <p>Order placed: February 26, 2022</p>
        <p>Order total: ${price}</p>
        <S.Download>Download receipt</S.Download>
      </S.Details>
    </S.Wrapper>
  )
}