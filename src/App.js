
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Content/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Sidebar/>
              <div class='content'>
                  <Routes>
                      <Route path='/profile' element={<Profile/>}/>
                      <Route path='/dialogs' element={<Dialogs />}/>
                  </Routes>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
