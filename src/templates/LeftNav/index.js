import * as S from './styles';

export const LeftNav = () => {
  return (
    <S.LeftNavContainer>
      <S.LeftNavGreeting>Hello, Croissant</S.LeftNavGreeting>
      <S.LeftNavLinksContainer>
        <S.LeftNavLink>Home</S.LeftNavLink>
        <S.LeftNavLink>Results</S.LeftNavLink>
        <S.LeftNavLink>Health Profile</S.LeftNavLink>
        <S.LeftNavLink>Memberships</S.LeftNavLink>
        <S.LeftNavLink>Orders</S.LeftNavLink>
        <S.LeftNavLink>Account</S.LeftNavLink>
      </S.LeftNavLinksContainer>
    </S.LeftNavContainer>
  );
};
