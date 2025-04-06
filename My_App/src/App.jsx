import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
import Navbar from "./Component/nav.jsx";
import Slide_bar from "./Component/slide_bar.jsx";
import Gallary_show from "./Component/Gallary.jsx";
import Footer from "./Component/Footer.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header bg-dark">
        <div className="p-2">
          <Navbar/>
        </div>
      </header>
      <section className="App-section">
        <Slide_bar/>
        <div className="container text-center p-3 show_icon">
          <i class="fa-solid fa-file"></i>
        </div>
        <Gallary_show/>
      </section>
      <footer className="bg-dark">
        <Footer/>
      </footer>
    </div>
  );
}

export default hot(App);
