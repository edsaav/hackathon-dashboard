import * as S from './styles';

export const Banner = () => {
  return (
    <S.QuestionCard>
      {/* <S.Content> */}
        <h3>what does croissant want to see written here. What could be helpful to know right now hmm</h3>
        <S.Actions>
          <button>Add to queue</button>
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