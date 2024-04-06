import {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Locations} from '../../components/login/locations/locations.tsx';
import {LoginForm} from '../../components/login/login-form/login-form.tsx';
import {Header} from '../../components/header/header.tsx';
import {citiesNames} from '../../const.ts';
import {getRandomCityName} from '../../utils.ts';

export function LoginPage(): JSX.Element {
  const randomCityName = getRandomCityName(citiesNames);
  const [randomCity, setRandomCity] = useState(randomCityName);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setRandomCity(randomCityName);
    }
    return () => {
      isMounted = false;
    };
  }, [randomCityName]);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Sign in</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <Locations randomCity={randomCity}/>
        </div>
      </main>
    </div>
  );
}
