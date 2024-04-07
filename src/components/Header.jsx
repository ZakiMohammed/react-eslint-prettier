import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsHouseFill, BsPersonHearts, BsHeartHalf } from 'react-icons/bs';
import Logo from './Logo';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const isActiveNavLink = ({ isActive }) =>
    `nav-link ${isActive && 'text-primary'}`;

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/'}>
            <Logo />
            React ESLint + Prettier
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setIsActive(!isActive)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-md-1">
                <NavLink className={isActiveNavLink} to={'/'}>
                  <BsHouseFill className="me-2 fs-5" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-md-1">
                <NavLink className={isActiveNavLink} to={'/users'}>
                  <BsPersonHearts className="me-2 fs-5" />
                  Users
                </NavLink>
              </li>
              <li className="nav-item px-md-1">
                <NavLink className={isActiveNavLink} to={'/about'}>
                  <BsHeartHalf className="me-2 fs-5" />
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
