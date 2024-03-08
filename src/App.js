import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Navigation from './pages/shared/header/navigation'
import MainAbout from './pages/about/main/mainPage'
import MainCareers from './pages/careers/main/mainPage'
import MainHome from './pages/home/main/mainPage'
import MainLocation from './pages/locations/main/mainPage'
import Aside from "./pages/shared/aside/aside";
import Footer from "./pages/shared/footer/footer";

import './sass/App.scss';

//Function to scroll to top of page when navigating 
//to a new page. at the end of a page focus of page will
//be at the bottom of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log(pathname)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".main", {
      scrollTrigger: {
        trigger: ".main",
        toggleActions: "restart pause none none"
      }
    })
  })



  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navigation />
        <Switch>

          <Route exact path='/'>
            <MainHome />
          </Route>
          <Route path='/About'>
            <MainAbout />
          </Route>
          <Route path='/Careers'>
            <MainCareers />
          </Route>
          <Route path='/Location'>
            <MainLocation />
          </Route>
        </Switch>
        <Aside />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
