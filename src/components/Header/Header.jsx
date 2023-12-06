//
import { NavLink } from 'react-router-dom';
import { StyledHeader } from './Header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <nav className="header-nav">
        <ul className="header-list">
          <li>
            <NavLink className="header-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="header-link" to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
