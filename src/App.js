
import './App.css';
import TopNav from "./TopNav";
import Content from "./Content";
import Footer from "./Footer";
import IftttAd from "./IftttAd";
import {Outlet} from "react-router-dom";


function App() {
  return (
    <div>
      <TopNav/>
      <Outlet/>
      <Footer/>
        <IftttAd/>
    </div>
  );
}

export default App;
