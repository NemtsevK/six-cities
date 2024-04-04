import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type LogoProps = {
  className: string;
  width: string;
  height: string;
  isMainPage?: boolean;
};

export function Logo({className, width, height, isMainPage = false}: LogoProps): JSX.Element {
  const isActiveClass = isMainPage ? `${className}__logo-link--active` : '';

  return (
    <Link
      className={`${className}__logo-link ${isActiveClass}`}
      to={AppRoute.Main}
    >
      <img
        className={`${className}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={width}
        height={height}
      />
    </Link>
  );
}
