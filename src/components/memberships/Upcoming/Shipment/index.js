import * as S from './styles';

export const Shipment = ({name, imgSrc, price, note }) => {
  return (
    <S.Wrapper>
      <S.Box src={imgSrc} />
      <S.Info>
        <S.MainInfo>
          <h2>{name}</h2>
          <S.Details>
            <h3>Qty: 1</h3>
            <h3>{price}</h3>
          </S.Details>
        </S.MainInfo>
        <S.Note>{note}</S.Note>
      </S.Info>
    </S.Wrapper>
  )
}