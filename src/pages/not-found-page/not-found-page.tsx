import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import styles from '../../style.module.css';
import {AppRoute} from '../../const.ts';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <main className={styles.main}>
        <h1 className={styles.title}>404. Page not found</h1>
        <Link className={styles.button} to={AppRoute.Main}>Go back to the main page</Link>
      </main>
    </div>
  );
}
