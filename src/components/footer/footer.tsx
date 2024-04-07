import {Logo} from '../logo/logo.tsx';

export function Footer() {
  return (
    <footer className="footer" data-testid="footerElement">
      <Logo className="footer" width="64" height="33"/>
    </footer>
  );
}
