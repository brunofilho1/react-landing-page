import './styles/global.scss'
import { Header } from "./components/Header/index";
import { Main } from './components/Main';
import { Fragment } from 'react';
import { Footer } from './components/Footer';

function App() {
  return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
  );
}

export default App;
