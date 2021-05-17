import logo from './logo.svg';
// import './slick.css';
// import './slick-theme.css';
import './App.css';
// import slickcarousel from "slick-carousel";
import Product from './Product';
import Fade from './Fade';
import * as React from 'react';
import Whirligig from './whirligig';
import SwipeToSlide from "./SwipeToSlide";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SimpleSlider from "./SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function App() {

  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}

        {/*<Product></Product>*/} {/*Para probar onhover (anda)*/}

        {/*<Fade></Fade>*/} {/*Para probar fade (anda pero rapido)*/}

        {/*<Owl></Owl>*/} {/*Para probar Owl*/}



        {/* <div>
          <button onClick={prev}>Prev</button>
          <Whirligig
            visibleSlides={3}
            gutter = "0.2em"
            infinite = {true}
            slideBy = {1}
            ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
          >
            <img src="http://www.fillmurray.com/400/300" />
            <img src="http://www.fillmurray.com/300/400" />
            <img src="http://www.fillmurray.com/400/200" />
            <img src="http://www.fillmurray.com/200/400" />
            <img src="http://www.fillmurray.com/500/300" />
          </Whirligig>
          <button onClick={next}>Next</button>
        </div>*/}
        
        {/*<Carousel infiniteLoop={true} >
                <div>
                    <img src="http://www.fillmurray.com/400/300" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.fillmurray.com/300/400" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.fillmurray.com/400/200" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="http://www.fillmurray.com/200/400" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="http://www.fillmurray.com/500/300" />
                    <p className="legend">Legend 5</p>
                </div>
        </Carousel>*/}       

      {/*</header>*/}

      <div>
          {/*SimpleSlider();*/}
          <SwipeToSlide></SwipeToSlide>
      </div>

    </div>
  );
}

export default App;

