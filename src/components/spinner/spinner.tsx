import {Helmet} from 'react-helmet-async';
import styles from '../../pages/not-found-page/style.module.css';

export function Spinner(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Loading</title>
      </Helmet>
      <main className={styles.main}>
        <h1 className={styles.title}>Loading ...</h1>
      </main>
    </div>
  );
}
