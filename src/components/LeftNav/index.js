import React, { useState } from 'react';
import { StyledLink } from '../StyledLink';
import * as S from './styles';

export const LeftNav = () => {
  const [showAccountLinks, setShowAccountLinks] = useState(false);

  return (
    <S.LeftNavContainer>
      <S.LeftNavGreeting>Hello, Croissant</S.LeftNavGreeting>
      <S.LeftNavLinksContainer>
        <S.LeftNavLink>
          <StyledLink to="/">Home</StyledLink>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <StyledLink to="/results">Results</StyledLink>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <StyledLink to="/health-profile">Health Profile</StyledLink>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <StyledLink to="/memberships">Memberships</StyledLink>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <StyledLink to="/orders">Orders</StyledLink>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <S.AccountNavLink
            onClick={() => setShowAccountLinks(!showAccountLinks)}
          >
            Account
          </S.AccountNavLink>
        </S.LeftNavLink>
        {showAccountLinks ? (
          <S.AccountLinks>
            <S.LeftNavLink>
              <StyledLink to="/profile">Profile</StyledLink>
            </S.LeftNavLink>
            <S.LeftNavLink>
              <StyledLink to="/billing-subscriptions">
                Billing & Subscriptions
              </StyledLink>
            </S.LeftNavLink>
            <S.LeftNavLink>
              <StyledLink to="/data-privacy">Data & Privacy</StyledLink>
            </S.LeftNavLink>
          </S.AccountLinks>
        ) : null}
      </S.LeftNavLinksContainer>
    </S.LeftNavContainer>
  );
};
