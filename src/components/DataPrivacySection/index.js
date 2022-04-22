import React, { useState } from 'react';
import { Checkbox } from '@everlywell/leaves';
import * as S from './styles';

export const DataPrivacySection = () => {
  const [isSharingInfoChecked, setIsSharingInfoChecked] = useState(true);
  const [isTextChecked, setIsTextChecked] = useState(true);
  return (
    <S.DataPrivacyContainer>
      <Checkbox
        bodyTextStyle={true}
        border={true}
        checked={isSharingInfoChecked}
        label="I consent to sharing my information with Everlywell"
        onChange={() => setIsSharingInfoChecked(!isSharingInfoChecked)}
      />
      <Checkbox
        bodyTextStyle={true}
        border={true}
        checked={isTextChecked}
        label="Send me text message updates"
        onChange={() => setIsTextChecked(!isTextChecked)}
      />
    </S.DataPrivacyContainer>
  );
};
