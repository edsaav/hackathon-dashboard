import * as S from './styles';

export const Alert = () => {
  return (
    <S.Banner>
      <S.Progress src='images/progress.png' />
      <S.Text>
        <h3>Account information needed</h3>
        <h4>Please update your payment information</h4>
      </S.Text>
      <S.Button>Go</S.Button>
    </S.Banner>
  )
}