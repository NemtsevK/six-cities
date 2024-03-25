import {Logo} from '../logo/logo.tsx';
import {Nav} from '../nav/nav.tsx';

type HeaderProps = {
  isActiveLogo: boolean;
  isNav: boolean;
}

export function Header({isActiveLogo, isNav}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isActive={isActiveLogo}/>
          </div>
          {isNav ? <Nav/> : ''}
        </div>
      </div>
    </header>
  );
}
