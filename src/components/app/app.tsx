import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  placesCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage {...props}/>
  );
}

export default App;
