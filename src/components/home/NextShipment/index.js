import { Card } from '../../Card'
import * as S from './styles';

export const NextShipment = () => {
  return (
    <Card>
      <S.Content>
        <h2>Memberships</h2>
        <h4>Next shipment</h4>
        <img src='images/nextShipment.png' alt='graph'/>
        <h4>Shipping to:</h4>
        <p>3209 Cherry Blossom Ct.<br/>Plano, TX 20402</p>
        <S.TertiaryLink href='/memberships'>Edit queue</S.TertiaryLink>
      </S.Content>
    </Card>
  )
}