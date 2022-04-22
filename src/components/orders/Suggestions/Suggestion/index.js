import * as S from './styles';

export const Suggestion = ({name, imgSrc, price }) => {
  return (
    <S.Wrapper>
      <S.Button />
      <S.Box src={imgSrc} />
      <S.Info>
        <h2>{name}</h2>
        <h3>${price}</h3>
      </S.Info>
    </S.Wrapper>
  )
}