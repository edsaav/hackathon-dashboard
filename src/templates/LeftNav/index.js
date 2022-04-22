import * as S from './styles';
import { Link } from 'react-router-dom';

export const LeftNav = () => {
  return (
    <S.LeftNavContainer>
      <S.LeftNavGreeting>Hello, Croissant</S.LeftNavGreeting>
      <S.LeftNavLinksContainer>
        <S.LeftNavLink>
          <Link to="/" style={{ textDecoration: 'none', color: '#95c6bf' }}>
            Home
          </Link>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <Link
            to="/results"
            style={{ textDecoration: 'none', color: '#95c6bf' }}
          >
            Results
          </Link>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <Link
            to="/health-profile"
            style={{ textDecoration: 'none', color: '#95c6bf' }}
          >
            Health Profile
          </Link>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <Link
            to="/memberships"
            style={{ textDecoration: 'none', color: '#95c6bf' }}
          >
            Memberships
          </Link>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <Link
            to="/orders"
            style={{ textDecoration: 'none', color: '#95c6bf' }}
          >
            Orders
          </Link>
        </S.LeftNavLink>
        <S.LeftNavLink>
          <Link
            to="/settings"
            style={{ textDecoration: 'none', color: '#95c6bf' }}
          >
            Account
          </Link>
        </S.LeftNavLink>
      </S.LeftNavLinksContainer>
    </S.LeftNavContainer>
  );
};
