import {Helmet} from 'react-helmet-async';
import styles from '../../pages/loading-page/loading-page.module.css';

export function LoadingPage(): JSX.Element {
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
