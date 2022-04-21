import { Icons } from '@everlywell/leaves';
import { Card } from '../Card'
import * as S from './styles';

export const HeartHealth = () => {
  return (
    <Card>
      <S.Content>
        <h2>Heart health</h2>
        <p>More than 12 percent of the U.S. population will develop a thyroid condition.</p>
        <h3><img src='images/shield.png' alt="shield with check"/>American Thyroid Association</h3>
      </S.Content>
      <S.Footer>
        <p>Did you find this helpful?</p>
        <S.Rating>
          <Icons.ThumbsUp />
          <Icons.ThumbsDown />
        </S.Rating>
      </S.Footer>
      <S.Badge src='images/thyroidBadge.png'/>
    </Card>
  )
}