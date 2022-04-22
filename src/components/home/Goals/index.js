import * as S from './styles';

export const Goals = () => {
  return (
    <S.Goals>
      <S.Content>
        <S.Left>
          <S.Ribbon src='images/ribbon.png' />
          <h3>Due in 6 months</h3>
          <h2>My goal is to lower my cholesterol by 6 points in 6 months</h2>
          <S.ProgressBar><S.Progress /></S.ProgressBar>
          <S.TertiaryLink>Edit goal</S.TertiaryLink>
        </S.Left>
        <S.Right>
          <S.GoalCards>
            <S.GoalCard>
              <S.Check src='images/check.png'/>
              <p>Take 1 heart health test every month and lower cholesterol</p>
              <h4>Great that you have a membership with us</h4>
            </S.GoalCard>
            <S.GoalCard>
              <S.Check src='images/check.png'/>
              <p>Exercise for at least 30 minutes a day at least 4 times a week</p>
              <h4>View list of exercises to do at home</h4>
            </S.GoalCard>
            <S.GoalCard>
              <S.Check src='images/check.png'/>
              <p>Reduce saturated fats, Eat foods rich in omega-3 fatty acids, eliminate trans fat</p>
              <h4>View list of foods</h4>
            </S.GoalCard>
          </S.GoalCards>
        </S.Right>
      </S.Content>

    </S.Goals>
  )
}