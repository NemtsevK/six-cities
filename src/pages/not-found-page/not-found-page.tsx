import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {Header} from '../../components/header/header.tsx';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <Header isActive={false} isNav={false}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login form">
            <h1 className="login__title">404. Page not found</h1>
            <div className="login__form form">
              <Link className="login__submit form__submit button" to="/">Go back to the main page</Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
