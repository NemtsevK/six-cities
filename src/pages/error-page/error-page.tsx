import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import {getCity} from '../../store/app-process/app-process.selectors';
import {citiesNames} from '../../const.ts';
import {MemoizedTabs} from '../../components/common/tabs/tabs.tsx';
import {Header} from '../../components/header/header.tsx';
import {ErrorStatus} from '../../components/error-status/error-status.tsx';

export function ErrorPage(): JSX.Element {
  const currentLocation = useAppSelector(getCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Error</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <MemoizedTabs cities={citiesNames}/>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <ErrorStatus currentLocation={currentLocation} />
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
