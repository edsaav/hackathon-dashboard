import { StyledLink } from '../StyledLink';
import * as S from './styles';

export const LeftNav = () => {
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
          <StyledLink to="/settings">Account</StyledLink>
        </S.LeftNavLink>
      </S.LeftNavLinksContainer>
    </S.LeftNavContainer>
  );
};
