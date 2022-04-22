import * as S from './styles';

export const Order = ({name, imgSrc, upcoming, details, warning }) => {
  return (
    <S.Wrapper>
      <S.Summary>
        <S.Box src={imgSrc} />
        <S.Info>
          <h2>
            {!upcoming && (
              <S.Warning src='images/warning.png'/>
            )}
            {name}
          </h2>
          <h3><b>{warning}</b>{details}</h3>
          {upcoming && (
            <h3><em>Auto-shipping: </em>June 4th, 2022</h3>
          )}
        </S.Info>
        <S.Actions>
          <S.Button appearance='secondary' isDisabled={upcoming}>{upcoming ? 'Redeem test' : 'Retest'}</S.Button>
          <S.Download>{upcoming ? 'Remove' : 'View Results'}</S.Download>
        </S.Actions>
      </S.Summary>
    </S.Wrapper>
  )
}