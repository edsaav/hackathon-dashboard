import { H4 } from '@everlywell/leaves';
import * as S from './styles';

export const BillingInfo = ({ setShowPaymentInfo, showPaymentInfo }) => {
  return (
    <>
      <S.BillingInfoTitleContainer>
        <H4>Billing</H4>
        <S.AddNewCardButtonContainer>
          <S.StyledButton
            href="#payment-info"
            appearance="secondary"
            onClick={() => setShowPaymentInfo(!showPaymentInfo)}
          >
            + Add new card
          </S.StyledButton>
        </S.AddNewCardButtonContainer>
      </S.BillingInfoTitleContainer>
      <S.CardsOnFileImage src="images/cardsOnFile.png" alt="cards-on-file" />
      <S.SubscriptionsImage
        src="images/subscriptions.png"
        alt="subscriptions-image"
      />
    </>
  );
};
