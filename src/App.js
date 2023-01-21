import s from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";


function App(props) {
  return (
      <BrowserRouter>
          <div className={s.App}>
              <Header/>
                <Main />
              <Footer/>
              <div className={s.footer}></div>
          </div>
      </BrowserRouter>
  );
}

export default App;
