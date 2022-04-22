import { H4 } from '@everlywell/leaves';
import * as S from './styles';

export const PaymentInfo = () => {
  return (
    <S.PaymentInfoContainer id="payment-info">
      <H4>Add new card</H4>
      <S.PaymentInfoImage
        src="images/paymentInfo.png"
        alt="payment-info-image"
      />
      <div>
        <S.StyledButton appearance="secondary" disabled={true}>
          Save
        </S.StyledButton>
        <S.StyledButton appearance="secondary">Cancel</S.StyledButton>
      </div>
    </S.PaymentInfoContainer>
  );
};
