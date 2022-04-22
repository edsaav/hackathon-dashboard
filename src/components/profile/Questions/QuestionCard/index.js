import * as S from './styles';

export const QuestionCard = ({ question }) => {
  return (
    <S.QuestionCard>
      {/* <S.Content> */}
        <h3>{question}</h3>
        <a href='/health-profile'>Answer</a>
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