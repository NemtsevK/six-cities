import {Logo} from '../logo/logo.tsx';
import {Nav} from '../nav/nav.tsx';

type HeaderProps = {
  isActive: boolean;
  isNav: boolean;
}

export function Header({isActive, isNav}: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isActive={isActive}/>
          </div>
          {isNav ? <Nav/> : ''}
        </div>
      </div>
    </header>
  );
}
