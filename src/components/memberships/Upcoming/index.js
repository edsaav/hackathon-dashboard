import { Shipment } from './Shipment';

import * as S from './styles';

export const Upcoming = ({withTest}) => {
  return (
    <S.Wrapper>
      <S.Header>Your upcoming shipment</S.Header>
      <S.Detail><em>Auto shipping: </em>May 24th, 2022</S.Detail>
      <S.Detail><em>Address: </em>3209 Cherry Blossom Ct...</S.Detail>
      <S.Spacer />
      <Shipment name='Heart Health Test' price='free' imgSrc='images/heartBox.png' />
      <Shipment name='Vitamin D3 Supplements' price='$18' imgSrc='images/vitBox.png' note='monthly' />
      {withTest && (
        <Shipment name='HbA1c' price='$49' imgSrc='images/heartBox.png' />
      )}
      <S.Info>
        <S.InfoRow>
          <p>Subtotal:</p>
          <p><b>{withTest ? '$67.00' : '$18.00'}</b></p>
        </S.InfoRow>
        <S.InfoRow>
          <p>Shipping:</p>
          <p><b>Free</b></p>
        </S.InfoRow>
        <S.InfoRow>
          <p>Promo:<span>MEMBERSHIPS</span></p>
          <p><em>{withTest ? '$13.40' : '-$4.00'}</em></p>
        </S.InfoRow>
      </S.Info>
      <S.Total>
        <p>Total (2 items):</p>
        <p><b>{withTest ? '$53.60' : '$14.00'}</b></p>
      </S.Total>
      <S.Button>Edit order</S.Button>
    </S.Wrapper>
  )
}