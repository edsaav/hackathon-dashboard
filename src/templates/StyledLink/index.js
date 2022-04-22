import { colors } from '@everlywell/leaves';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none',
  color: `${colors.teal3}`,
};

const activeLinkStyle = {
  textDecoration: 'none',
  color: `${colors.teal5}`,
};
export const StyledLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={match ? activeLinkStyle : linkStyle} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};
