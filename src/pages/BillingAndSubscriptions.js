
import React, { useState } from 'react';
import { PaymentInfo } from '../components/PaymentInfo';
import { BillingInfo } from '../components/BillingInfo';

export const BillingAndSubscriptions = () => {
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  return (
    <>
      <BillingInfo
        setShowPaymentInfo={setShowPaymentInfo}
        showPaymentInfo={showPaymentInfo}
      />
      {showPaymentInfo ? <PaymentInfo /> : null}
    </>
  );
};
