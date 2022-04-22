import { Icons } from '@everlywell/leaves';
import * as S from './styles';

export const HeartHealth = () => {
  return (
    <S.Card>
      <S.Content>
        <h2>Heart health</h2>
        <p>One out of every three adults has high cholesterol. All people over age 20 should get their cholesterol checked with a simple blood test every five years, according to the CDC, but only about 75 percent of them do.</p>
        <h3><img src='images/shield.png' alt="shield with check"/>The CDC</h3>
      </S.Content>
      <S.Footer>
        <p>Did you find this helpful?</p>
        <S.Rating>
          <Icons.ThumbsUp />
          <Icons.ThumbsDown />
        </S.Rating>
      </S.Footer>
      <S.Badge src='images/thyroidBadge.png'/>
    </S.Card>
  )
}