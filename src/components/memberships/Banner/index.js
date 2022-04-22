import * as S from './styles';

export const Banner = () => {
  return (
    <S.QuestionCard>
      {/* <S.Content> */}
        <h3>You told us you’re trying to get pregnant.</h3>
        <h4>Your history of abnormal HbA1c levels could affect your fertility. Our Fertility Pathway can help monitor & support your conception journey.</h4>
        <S.Actions>
          <a href='/billing-subscriptions'>Join pathway</a>
          <S.TertiaryLink>Manage</S.TertiaryLink>
        </S.Actions>
        <S.Flourish>
          <S.FlourishUpperLeft />
          <S.FlourishUpperRight />
          <S.FlourishLowerLeft />
          <S.FlourishLowerRight />
        </S.Flourish>
      {/* </S.Content> */}
    </S.QuestionCard>
  )
}