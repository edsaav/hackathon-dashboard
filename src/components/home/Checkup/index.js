import { Card } from '../../Card'
import * as S from './styles';

export const Checkup = () => {
  return (
    <Card>
      <S.Content>
        <h4>Heart health</h4>
        <h2>Have you felt any of the following symptoms in the past week?</h2>
        <ul>
          <li><span />Numbness in fingers</li>
          <li><span />Fatigue</li>
          <li><span />None of these symptoms</li>
        </ul>
      </S.Content>
    </Card>
  )
}