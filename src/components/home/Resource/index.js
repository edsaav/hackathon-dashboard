import * as S from './styles';

export const Resource = ({ text, imgSrc}) => {
  return (
    <S.Card>
      <S.Image src={imgSrc} />
      <S.Details>
        <S.Text>{text}</S.Text>
        <S.Tag>15 min</S.Tag>
      </S.Details>
    </S.Card>
  )
}