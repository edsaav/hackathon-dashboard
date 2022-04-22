import { Card } from '../../Card'
import * as S from './styles';

export const Graph = () => {
  return (
    <Card>
      <S.Content>
        <h2>Cholesterol over time</h2>
        <img src='images/graph.png' alt='graph'/>
        <h4>Summary:</h4>
        <p>Your cholesterol has bounced up and down a lot what is up with that you must be doing something</p>
        <S.TertiaryLink href='/results'>See more</S.TertiaryLink>
      </S.Content>
    </Card>
  )
}